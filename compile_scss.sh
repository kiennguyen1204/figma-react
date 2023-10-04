find src -type f -name '*.scss' | while read scss_file; do
  css_file="${scss_file%.scss}.css"
  echo "Compiling $scss_file to $css_file"
  ./node_modules/.bin/node-sass --output-style compressed "$scss_file" > "$css_file"
done