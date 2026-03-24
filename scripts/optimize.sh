#!/bin/bash

# Function to optimize images in a directory
optimize_dir() {
    local dir=$1
    local max_size=$2
    if [ ! -d "$dir" ]; then
        return
    fi
    echo "Optimizing $dir (max size: ${max_size}px)..."
    
    find "$dir" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read img; do
        filename=$(basename -- "$img")
        filename_no_ext="${filename%.*}"
        dirname=$(dirname "$img")
        output="$dirname/$filename_no_ext.webp"
        
        echo "  Processing: $filename -> ${filename_no_ext}.webp"
        # Resize and convert to webp (only if it doesn't already exist or if you want to overwrite)
        convert "$img" -auto-orient -resize "${max_size}x${max_size}>" -quality 80 "$output"
        
        # Remove the original file after successful conversion
        if [ -f "$output" ]; then
            rm "$img"
            echo "  ✓ Cleaned up: $filename"
        fi
    done
}

echo "🚀 Starting Asset Optimization..."

# Optimize team and supervisors (800px max)
optimize_dir "public/assets/team" 800
optimize_dir "public/assets/supervisors" 800

# Optimize other categories (1200px max)
optimize_dir "public/assets/achievements" 1200
optimize_dir "public/assets/cells" 1200
optimize_dir "public/assets/events" 1200

# Optimize top-level assets in public/assets
find public/assets -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read img; do
    filename=$(basename -- "$img")
    filename_no_ext="${filename%.*}"
    dirname=$(dirname "$img")
    output="$dirname/$filename_no_ext.webp"
    echo "  Processing root asset: $filename"
    convert "$img" -auto-orient -resize "1200x1200>" -quality 80 "$output"
    if [ -f "$output" ]; then
        rm "$img"
        echo "  ✓ Cleaned up: $filename"
    fi
done

echo "✅ Optimization Complete!"
