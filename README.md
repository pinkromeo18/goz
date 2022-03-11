# goz
game font goz.css 

-  https://pinkromeo18.github.io/goz/view.html

```html
<div class="goz x2"></div>
<style>
@import url(https://pinkromeo18.github.io/goz/goz.css);
</style>
<script type="module">
import {Goz} from "https://pinkromeo18.github.io/goz/goz.js";
var goz =Goz('.goz','https://pinkromeo18.github.io/goz/mons/');
  

goz.add('mons',16,16)
goz.img('mons','man1-min.png')
goz.pos('mons',8,7)

goz.add('hint',30,1).pos('hint',1,0)
goz.txt('hint','|モンスターが あらわれた！')
  
goz.v3d(`
101
001
101
`)
</script>
```

```
https://pinkromeo18.github.io/goz/mons/
```
```
import {Goz} from "https://pinkromeo18.github.io/goz/goz.js";
```
