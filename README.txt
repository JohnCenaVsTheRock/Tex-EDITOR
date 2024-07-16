	- the run.bat file will take the (essencially text file) "tikz.tex" wich can contayin latex markup for plotting a graph/points
	- returns a pdf file that can be used in latex again
	- the idea is to have node.js server running that will accept input (axis labels, multiple graphs) and calcualate boundries and run "run.bat" and send "tikz.pdf" back




	- everything works, just svg file hast do be deleted always after use (to use, just run "server.bat" and everything will hapen automatically)







Issues:
	- LaTex will (when executed via TexMaker or similar), try to run inkscape when using package "svg". this only works if "inksacpe"
		is installed and the path is added to editor. Incscape will convert svg to pdf when svg package is used, and 
		paste it into the tex document. To make everything work niecle, include the Tex Font (Computer Modern) in your windows 
		Font library so incscape can use it. desweiteren muss im Tex-Editor "shellscaping" aktiviert werden.
	- for pdf export of "run.bat" to work, you need inkscaped installed (installer EXE! for PATH adding) and added to PATH in windows.

	- using PDF Export instead of SVG Export is strongly adviced and works always.
	- fresh install can cause problems in "run.bat" if "latex.exe" is not in windows PATH. 
		-> solution: modify the run.bat file to include "set PATH=%PATH%;C:\Users\Drlja\AppData\Local\Programs\MiKTeX\miktex\bin\x64\" or whereever miktex 			placed latex, such that it will become temoprary PATH variable and can run in the background when called. If that does not work, just replace 			"latex" with "C:\Users\Drlja\AppData\Local\Programs\MiKTeX\miktex\bin\x64" and accordingly proceed wiht likewise commands (i.e "pdflatex")
			OR: BEST OPTION: "SET PATH=C:\Users\Drlja\AppData\Local\Programs\MiKTeX\miktex\bin\x64;%PATH%" -for local set
			OR BEST OPTION: set enviroment vars (GLOBAL!), add "C:\Users\Drlja\AppData\Local\Programs\MiKTeX\miktex\bin\x64" to PATH.