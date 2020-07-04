npm run build &&
git checkout gh pages &&
rm -rf src *.html *.css *.js *.png &&
mv dist/* ./ &&
 rm -rf dist;
 git add . && 
 git commit -m 'update' && 
 git push 