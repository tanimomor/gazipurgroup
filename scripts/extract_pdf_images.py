"""
PDF Image Extractor
Extracts all images from a PDF file in their original dimensions.

Usage:
    python extract_pdf_images.py <pdf_file> [output_directory]

Requirements:
    pip install PyMuPDF Pillow
"""

import sys
import os
from pathlib import Path
import fitz  # PyMuPDF
from PIL import Image
import io


def extract_images_from_pdf(pdf_path, output_dir=None):
    """
    Extract all images from a PDF file in their original dimensions.
    
    Args:
        pdf_path (str): Path to the PDF file
        output_dir (str, optional): Directory to save extracted images. 
                                   Defaults to 'extracted_images' in the same directory as PDF.
    
    Returns:
        int: Number of images extracted
    """
    # Validate PDF file
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file '{pdf_path}' not found.")
        return 0
    
    # Setup output directory
    if output_dir is None:
        pdf_dir = os.path.dirname(os.path.abspath(pdf_path))
        pdf_name = Path(pdf_path).stem
        output_dir = os.path.join(pdf_dir, f"{pdf_name}_extracted_images")
    
    os.makedirs(output_dir, exist_ok=True)
    
    # Open PDF
    try:
        pdf_document = fitz.open(pdf_path)
    except Exception as e:
        print(f"Error opening PDF: {e}")
        return 0
    
    image_count = 0
    
    # Iterate through each page
    for page_num in range(len(pdf_document)):
        page = pdf_document[page_num]
        image_list = page.get_images(full=True)
        
        print(f"Page {page_num + 1}: Found {len(image_list)} image(s)")
        
        # Extract each image
        for img_index, img in enumerate(image_list):
            xref = img[0]  # Image reference number
            
            try:
                # Extract image bytes
                base_image = pdf_document.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                # Get original dimensions
                width = base_image.get("width", 0)
                height = base_image.get("height", 0)
                
                # Create filename
                image_filename = f"page{page_num + 1}_img{img_index + 1}.{image_ext}"
                image_path = os.path.join(output_dir, image_filename)
                
                # Save image in original dimensions
                with open(image_path, "wb") as img_file:
                    img_file.write(image_bytes)
                
                image_count += 1
                print(f"  Extracted: {image_filename} ({width}x{height}px, {image_ext})")
                
            except Exception as e:
                print(f"  Error extracting image {img_index + 1} on page {page_num + 1}: {e}")
                continue
    
    pdf_document.close()
    
    print(f"\nTotal images extracted: {image_count}")
    print(f"Output directory: {output_dir}")
    
    return image_count


def main():
    """Main function to handle command-line arguments."""
    if len(sys.argv) < 2:
        print("Usage: python extract_pdf_images.py <pdf_file> [output_directory]")
        print("\nExample:")
        print("  python extract_pdf_images.py document.pdf")
        print("  python extract_pdf_images.py document.pdf ./my_images")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    output_dir = sys.argv[2] if len(sys.argv) > 2 else None
    
    print(f"Extracting images from: {pdf_path}")
    print("-" * 60)
    
    extract_images_from_pdf(pdf_path, output_dir)


if __name__ == "__main__":
    main()
