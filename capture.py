import cv2
import os
import imutils

# Nombre de las carpetas
#emotionName = 'Anger'
#emotionName = 'Happy'
#emotionName = 'Sad'
emotionName = 'Surprise'

# Ruta de la carpeta Data
dataPath = os.getcwd() + '/' + 'Data'

# Creamos las carpetas correspondientes a las imágenes de cada emoción
emotionsPath = dataPath + '/' + emotionName

if not os.path.exists(emotionsPath):
	print('Carpeta creada: ',emotionsPath)
	os.makedirs(emotionsPath)

# Captura de video
cap = cv2.VideoCapture(0,cv2.CAP_DSHOW)

# Inicializamos el video streaming
faceClassif = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Contador de capturas
count = 0

while True:

	# leemos cada fotograma
	ret, frame = cap.read()
	if ret == False: break
	# se redimensiona la imagen
	frame =  imutils.resize(frame, width=640)
	# se aplica escala de grises
	gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
	# obtenemos una copia del fotograma original
	auxFrame = frame.copy()
	# en 'faces' se almacenan los rostros detectados
	faces = faceClassif.detectMultiScale(gray,1.3,5)

	# tratamiento de la imagen
	for (x,y,w,h) in faces:
		cv2.rectangle(frame, (x,y),(x+w,y+h),(0,255,0),2)
		rostro = auxFrame[y:y+h,x:x+w]
		rostro = cv2.resize(rostro,(150,150),interpolation=cv2.INTER_CUBIC)
		cv2.imwrite(emotionsPath + '/rotro_{}.jpg'.format(count),rostro)
		# se aumenta el contador en 1
		count = count + 1

	# visualizamos la imagen
	cv2.imshow('frame',frame)

	# se detiene el proceso al llegar a 200 imágenes recopiladas o al presionar ESC
	k =  cv2.waitKey(1)
	if k == 27 or count >= 200:
		break

# se termina el video streaming
cap.release()

# se cierran las ventanas que fueron abiertas
cv2.destroyAllWindows()