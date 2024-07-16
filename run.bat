::call set PATH=%PATH%;C:\Users\Drlja\AppData\Local\Programs\MiKTeX\miktex\bin\
:: optional (INCLUDE only if latex is not in PATH)
call activate environmentname
call C:\Users\Drlja\AppData\Local\Programs\MiKTeX\miktex\bin\x64\latex -interaction=nonstopmode tikz.tex
::call latex -interaction=nonstopmode tikz.tex
call C:\Users\Drlja\AppData\Local\Programs\MiKTeX\miktex\bin\x64\dvisvgm -interaction=nonstopmode tikz.dvi
::call dvisvgm -interaction=nonstopmode tikz.dvi
call C:\Users\Drlja\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdflatex -interaction=nonstopmode tikz.tex
::call pdflatex -interaction=nonstopmode tikz.tex
del tikz.log
del tikz.aux
del tikz.dvi
del tikz.auxlock
del tikz-figure0.md5
::pause