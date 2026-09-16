# Sources graphiques de Carnet Végétal

Direction artistique refondue le 2026-09-16. La version du 2026-09-15 s'inspirait de https://www.hippocratus.com/ d'un peu trop près : palette reprise au code hexadécimal, et webfonts téléchargées depuis leur CDN Shopify. Les deux points sont corrigés, le site ne partage plus aucune valeur ni aucun fichier avec cette référence. Photos Pexels, sans réutilisation des photos, logos ni témoignages Hippocratus.

## Identité

- **Logo** : `static/favicon.svg`, dessiné en interne le 2026-09-16. Un carnet au dos rose, une pousse et un bourgeon, qui reprend le nom du média. Remplace la feuille dans un cercle de la version précédente. Décliné en `favicon.ico` (16/32/48), `apple-touch-icon.png` (180), `icon-192.png` et `icon-512.png`, générés depuis le SVG avec ImageMagick.
- **Palette** : vert `#1f5d45` (couleur de marque), crème `#fbf5f1`, sauge `#e4ece5`, et un accent rose/mauve, `#c26f95` en aplat, `#a14a77` en texte sur fond clair, `#f0bed3` sur fond vert, `#6d4a75` pour les liens de lecture. Les déclinaisons du rose existent pour le contraste : le rose plein tombe à 2,2 sur le vert du footer, la version claire remonte à 4,8.
- **Rayon des angles** : 18 px (30 px avant).

## Photographies

- `static/images/foret.jpg` : omari jalagania, https://www.pexels.com/photo/13369973/. Source téléchargée : https://images.pexels.com/photos/13369973/pexels-photo-13369973.jpeg.
- `static/images/aromatherapie.jpg` : Tara Winstead, https://www.pexels.com/photo/6694208/. Source téléchargée : https://images.pexels.com/photos/6694208/pexels-photo-6694208.jpeg.
- `static/images/bourgeons.jpg` : Mahesh Mohan, https://www.pexels.com/photo/36907353/. Source téléchargée : https://images.pexels.com/photos/36907353/pexels-photo-36907353.jpeg.
- `static/images/fleurs.jpg` : Hannah Boardman, https://www.pexels.com/photo/11296580/. Source téléchargée : https://images.pexels.com/photos/11296580/pexels-photo-11296580.jpeg.
- `static/images/detente.jpg` : Teona Swift, https://www.pexels.com/photo/6913383/. Source téléchargée : https://images.pexels.com/photos/6913383/pexels-photo-6913383.jpeg.
- `static/images/soins.jpg` : kaboompics.com, https://www.pexels.com/photo/7321651/. Source téléchargée : https://images.pexels.com/photos/7321651/pexels-photo-7321651.jpeg.
- `static/images/lavande.jpg` : Александр Лич, https://www.pexels.com/photo/13403632/. Source téléchargée : https://images.pexels.com/photos/13403632/pexels-photo-13403632.jpeg.

Licence des photographies : https://www.pexels.com/license/. Fichiers JPEG optimisés de 1000 px, sauf la couverture de 1800 × 1013 px. Recadrage et voile coloré réalisés en CSS. Crédits publics sur les pages FR et EN dédiées.

## Typographies

Deux familles libres, téléchargées depuis Google Fonts le 2026-09-16 et servies depuis notre domaine. Fichiers variables, un par sous-ensemble (latin, latin-ext).

- Titres et marque : **Outfit** (SIL Open Font License 1.1), `static/fonts/Outfit-latin.woff2` et `Outfit-latin-ext.woff2`.
- Textes courants : **Inter** (SIL Open Font License 1.1), `static/fonts/Inter-latin.woff2` et `Inter-latin-ext.woff2`.

**Ce qui a été retiré le 2026-09-16** : `Sherika-Medium.woff2` et `Sherika-Bold.woff2`, récupérées le 2026-09-15 sur le CDN Shopify d'Hippocratus. Sherika est une police commerciale : la servir depuis notre domaine sans licence était le vrai risque juridique du site, davantage qu'une ressemblance de palette. Les deux fichiers Inter venaient du même CDN et ont été repris à la source, Inter étant libre mais sans raison de dépendre d'eux.

## Sauvegarde

Design initial conservé dans `~/code/_archives/guide-du-naturel-design-initial-2026-09-15/`. Le SVG botanique initial reste disponible mais n’est plus utilisé dans les pages.
