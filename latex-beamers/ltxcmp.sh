mkdir .build
pdflatex -output-directory=.build/ $1
#mkdir pdf
mv .build/*.pdf . 
