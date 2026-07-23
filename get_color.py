import sys
from PIL import Image

try:
    img = Image.open('/home/jawad/projects/accredian-enterprise-landing-page-clone/public/images/logo.webp')
    img = img.convert('RGB')
    
    # Get all colors
    colors = img.getcolors(maxcolors=100000)
    # Sort by count
    colors.sort(key=lambda x: x[0], reverse=True)
    
    # Filter out white and near-white colors, and black
    brand_colors = []
    for count, (r, g, b) in colors:
        # Ignore whites/grays
        if r > 240 and g > 240 and b > 240: continue
        if abs(r-g) < 10 and abs(g-b) < 10: continue
        
        brand_colors.append((count, r, g, b))
        
    for c in brand_colors[:5]:
        print(f"#{c[1]:02x}{c[2]:02x}{c[3]:02x} - Count: {c[0]}")
        
except Exception as e:
    print(e)
