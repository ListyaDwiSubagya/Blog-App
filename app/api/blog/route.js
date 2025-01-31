import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { NextResponse } from "next/server";
const fs = require('fs')

// API Endpoint to get all blog
export async function GET(request) {
  
  try {
    await ConnectDB();
    const blogId = request.nextUrl.searchParams.get("id")
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      return NextResponse.json(blog);
    }
    else {
      const blogs = await BlogModel.find({});
      return NextResponse.json({ blogs });
    }
  } catch (error) {
    console.error("Error connecting to database:", error);
    return NextResponse.json({ success: false, msg: "Failed to fetch blogs" });
  }
}

// API Endpoint for uploading blog
export async function POST(request) {
  try {
    await ConnectDB();

    const formData = await request.formData();
    const timestamp = Date.now();

    // Handle image upload
    const image = formData.get("image");
    if (!image) {
      return NextResponse.json({ success: false, msg: "Image is required" });
    }

    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);

    const publicPath = "./public";
    if (!existsSync(publicPath)) {
      await mkdir(publicPath);
    }

    const path = `${publicPath}/${timestamp}_${image.name}`;
    await writeFile(path, buffer);
    const imgUrl = `/${timestamp}_${image.name}`;

    // Collect blog data
    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };

    // Validate required fields
    if (!blogData.title || !blogData.description || !blogData.category || !blogData.author) {
      return NextResponse.json({ success: false, msg: "All required fields must be provided" });
    }

    // Save blog to database
    await BlogModel.create(blogData);
    console.log("Blog saved to database");

    return NextResponse.json({ success: true, msg: "Blog added" });
  } catch (error) {
    console.error("Error adding blog:", error);
    return NextResponse.json({ success: false, msg: error.message || "Failed to add blog" });
  }
}

// creating API endpoint to delete blog
export async function DELETE(request) {
  const id = await request.nextUrl.searchParams.get('id');
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({msg:"Blog Deleted"});
}

