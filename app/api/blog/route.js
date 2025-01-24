import { ConnectDB } from "@/lib/config/db";
import BlogModel from "@/lib/models/BlogModel";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

// API Endpoint to get all blog
export async function GET(request) {

    const blogs = await BlogModel.find({});

  try {
    await ConnectDB();
    return NextResponse.json({blogs});
  } catch (error) {
    console.error("Error connecting to database:", error);
    return NextResponse.json({ success: false, msg: "Failed to connect to DB" });
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
      throw new Error("Image is required");
    }
    const imageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByteData);
    const path = `./public/${timestamp}_${image.name}`;
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
    if (
      !blogData.title ||
      !blogData.description ||
      !blogData.category ||
      !blogData.author
    ) {
      throw new Error("All required fields must be provided");
    }

    // Save blog to database
    await BlogModel.create(blogData);
    console.log("Blog Saved");

    return NextResponse.json({ success: true, msg: "Blog Added" });
  } catch (error) {
    console.error("Error adding blog:", error);
    return NextResponse.json({ success: false, msg: error.message });
  }
}
