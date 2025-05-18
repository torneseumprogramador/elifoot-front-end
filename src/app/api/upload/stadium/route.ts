import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { slugify } from '@/helpers/imageHelper';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;
    const entityName = formData.get('entityName') as string;
    const entityType = formData.get('entityType') as string;
    
    if (!file || !entityName || !entityType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Get the original file extension
    const originalName = file.name;
    const extension = originalName.substring(originalName.lastIndexOf('.'));

    // Create the slugified filename
    const slug = slugify(entityName);

    // Create the file path
    const path = join(process.cwd(), 'public', 'uploads', entityType, `${slug}${extension}`);

    // Write the file
    await writeFile(path, buffer);

    return NextResponse.json({ 
      success: true,
      path: `/uploads/${entityType}/${slug}${extension}`
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Error uploading file' },
      { status: 500 }
    );
  }
} 