import os
from PIL import Image
from django.core.exceptions import ValidationError

def validate_icon_image_size(image):
    if image:
        with Image.open(image) as img:
            if img.width > 70 or img.height > 70:
                raise ValidationError(
                    f"The max allowed dimensions for image are 70x70. he image you uploaded has the size: {img.size}"
                )
            
def validate_image_file_extension(value):
    ext = os.path.splitext(value.name)[1]
    valid_extensions = [".jpeg", ".png", ".jpg", ".gif"]

    if not ext.lower() in valid_extensions:
        raise ValidationError(f"Unsupported file extensions")