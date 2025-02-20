<!DOCTYPE html>
<html>
    <head>
        <title>
            changing
        </title>

    </head>
    <body>
        <button onclick="
           f()  "  class="first">subscribe</button>

    </body>
    <script>
        function f(){
            const str=document.querySelector('.first');

if(str.innerText==='subscribe'){
    str.innerHTML='subscribed'
}
else{
    str.innerHTML='subscribe'
}

        }
    </script>
   
</html>
