# PDF Image Extractor

Python script to extract all images from PDF files in their original dimensions.

## Installation

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Or install manually:

```bash
pip install PyMuPDF Pillow
```

## Usage

### Basic usage (extracts to default directory):
```bash
python extract_pdf_images.py document.pdf
```

This will create a folder named `document_extracted_images` in the same directory as the PDF.

### Specify custom output directory:
```bash
python extract_pdf_images.py document.pdf ./my_output_folder
```

## Features

- ✅ Extracts images in **original dimensions** (no resizing)
- ✅ Preserves original image format (PNG, JPEG, etc.)
- ✅ Handles multi-page PDFs
- ✅ Shows image dimensions and format in output
- ✅ Automatic output directory creation
- ✅ Error handling for corrupted images

## Output

Images are saved with the naming pattern:
- `page1_img1.png`
- `page1_img2.jpg`
- `page2_img1.png`
- etc.

The script displays:
- Number of images found per page
- Extracted image details (filename, dimensions, format)
- Total count of extracted images
- Output directory path
