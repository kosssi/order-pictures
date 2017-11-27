# Order pictures

Le but de ce dépot est de m'aider à ordonner mes photos.

## Installation

```
yarn
```

## Utilisation

```
yarn start ~/Pictures/2017/
```

# Commande pratique

## Installation

```
brew install exiftool
brew install ffmpeg
```

## Suppression des exif

```
exiftool -all= *
rm *_original
```

## Redimensionner les photos

```
for file in *; do convert $file -resize 1600 -density 72 -quality 75 resized-$file; done
```

## Création d'un gif

```
convert -delay 60 -loop 0 *.JPG myimage.gif
```
