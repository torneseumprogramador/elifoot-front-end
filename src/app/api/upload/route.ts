import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { slugify } from "@/helpers/imageHelper";
import type { EntityType } from "@/helpers/imageHelper";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("image") as File;
    const entityName = formData.get("entityName") as string;
    const entityType = formData.get("entityType") as EntityType;

    if (!file || !entityName || !entityType) {
      return NextResponse.json(
        {
          error: "Missing required fields",
          path: `/${entityType}s`,
          status: 400,
          timestamp: new Date().toISOString(),
        },
        { status: 400 },
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Get the original file extension
    const originalName = file.name;
    const extension = originalName.substring(originalName.lastIndexOf("."));

    // Create the slugified filename
    const slug = slugify(entityName);

    try {
      // Create the file path
      const path = join(
        process.cwd(),
        "public",
        "uploads",
        entityType,
        `${slug}${extension}`,
      );

      // Write the file
      await writeFile(path, buffer);

      return NextResponse.json(
        {
          success: true,
          path: `/uploads/${entityType}/${slug}${extension}`,
          status: 201,
          timestamp: new Date().toISOString(),
        },
        { status: 201 },
      );
    } catch (error) {
      console.error("Error writing file:", error);
      return NextResponse.json(
        {
          error: "Error saving file",
          path: `/${entityType}s`,
          status: 500,
          timestamp: new Date().toISOString(),
        },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Error processing upload:", error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        path: "/upload",
        status: 500,
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
