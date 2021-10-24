# optifine-proxy-server
Basic optifine proxy server done in node.js powered by express framework

(Im not the javascript guy so dont cry because of the dog code :))
<h1>Why</h1>
I was bored today so I've decided to code basic optifine proxy that allows you to set your own cape. This may be glitchy so if you want to use it you gotta make some changes. This should just give you a look how can your own proxy work :). <br>
If ur very begginer I do not recommend you to use it. What knowledge do you need for it? Basically almost all you need to know is how to setup node.js project and install needed packages and how to use google (to make some fixes) and how to run this on your server (for example vps).
Code isn't commented for now cuz im a lazy ass :)

<h2>The idea of optifine proxy</h2>
Optifine uses http requests to check what capes users have set, so basicly what I am doing is redirecting to my host by editing up hosts file (C:\Windows\System32\drivers\etc\hosts) by adding this line:
"my_host_ip s.optifine.net" for example "33.15.89.69 s.optifine.net". You may ask what does it to. It basically redirects a request that should be sent to optifine to my host and I spoof the output so user can have a custom cape :)

<h2>Maybe I will drop an update that will fix (maybe) all of the glitches if they occur (I'm pretty sure they do, cuz I didn't really test it, I mean I havent used it for more than 5 mins lol)</h2>

Mysql database that I use is named capes and has one table - users and here is it's structure:
![image](https://user-images.githubusercontent.com/79219288/138592031-9e3b2987-1c3f-477d-828f-f977f0809682.png)

Feel free to commit if you do something very juicy or even less juicy :)
If you have any questions open an issue or dm me or smth
