import cv2
import os

def redimensionar_imagenes_opencv(ruta_entrada, ruta_salida, nuevo_tamano):
    for filename in os.listdir(ruta_entrada):
        # Asegurarse de que es un archivo de imagen
        if filename.endswith(('.png', '.jpg', '.jpeg', '.gif')):
            # Construir la ruta completa de la imagen
            ruta_imagen_entrada = os.path.join(ruta_entrada, filename)

            # Leer la imagen con OpenCV
            imagen = cv2.imread(ruta_imagen_entrada)

            # Redimensionar la imagen
            imagen_redimensionada = cv2.resize(imagen, nuevo_tamano, interpolation=cv2.INTER_AREA)

            # Construir la ruta de salida
            ruta_imagen_salida = os.path.join(ruta_salida, filename)

            # Guardar la imagen redimensionada
            cv2.imwrite(ruta_imagen_salida, imagen_redimensionada)

ruta_entrada = 'imgs'
ruta_salida = 'b-shop/public/Productos'
nuevo_tamano = (150, 200)  # El nuevo tamaño deseado

redimensionar_imagenes_opencv(ruta_entrada, ruta_salida, nuevo_tamano)
