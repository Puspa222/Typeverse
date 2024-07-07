// Description: This file contains the code for the type test.
str=`Living in today's diverse world presents us with a myriad of experiences, each contributing to the rich tapestry of human life. Urban environments, for instance, are characterized by their towering skyscrapers, bustling streets, and constant activity. These cities, with their shimmering glass buildings and crowded public transportation systems, reflect the relentless pace of modern life. They are hubs of commerce, culture, and innovation, drawing people from various backgrounds to their vibrant centers. Parks and green spaces, nestled amidst the concrete jungle, offer a sanctuary where people can unwind and connect with nature. These urban oases, with their manicured lawns, playgrounds, and benches, are places where families gather, children play, and individuals find a moment of peace in an otherwise hectic environment. The countryside, in stark contrast, provides a serene escape from the chaos of city life. Its rolling hills, vast fields, and quiet forests offer a slower, more reflective pace of life. In rural areas, one can find a sense of tranquility, where the rhythm of daily life is dictated by the seasons and the natural world. Farms, with their red barns and sprawling fields, are common sights, showcasing a lifestyle rooted in agriculture and close-knit communities. The beauty of the countryside lies in its simplicity and its deep connection to the land. Coastal areas, with their golden beaches and endless ocean horizons, offer yet another distinct experience. The sound of waves crashing against the shore, the salty breeze, and the warm sand beneath one's feet create a unique sensory experience. Beaches are places of recreation and relaxation, where people swim, surf, build sandcastles, and bask in the sun. The coastal environment fosters a deep appreciation for the natural world and its many wonders. Meanwhile, mountain regions provide a breathtakingly different kind of beauty. Their towering peaks, often capped with snow, offer opportunities for hiking, skiing, and mountaineering. The crisp mountain air, the stunning vistas, and the challenge of the climb appeal to those seeking adventure and a closer connection to nature. Each of these environments, whether urban, rural, coastal, or mountainous, presents its own set of experiences and opportunities for exploration and enjoyment.
The advancement of technology has profoundly impacted every aspect of our lives, bridging the gaps between these diverse environments and connecting people in unprecedented ways. Smartphones, computers, and the internet have become integral to daily life, providing access to information, entertainment, and communication. These technologies enable people to stay connected with friends and family, regardless of geographical distances. Social media platforms, video calls, and instant messaging have made it possible to maintain relationships and share experiences in real-time. Additionally, the internet serves as a vast repository of knowledge, offering resources for education, research, and personal growth. Online courses, digital libraries, and educational websites provide opportunities for lifelong learning and skill development. In the realm of entertainment, streaming services, online games, and digital music platforms offer endless options for relaxation and enjoyment. Technology has also revolutionized the way we work, with remote work becoming increasingly common. Virtual meetings, collaborative online tools, and digital workspaces have made it possible for people to work from anywhere, fostering a more flexible and dynamic approach to employment. The impact of technology extends to transportation as well, with innovations such as electric vehicles, high-speed trains, and ride-sharing apps transforming the way we travel. These advancements not only make transportation more efficient but also contribute to environmental sustainability. The rapid development of technology continues to shape our world, creating new possibilities and enhancing our ability to connect, learn, and explore.
Transportation, in its various forms, plays a crucial role in connecting different parts of the world and facilitating the movement of people and goods. In urban areas, public transportation systems such as buses, subways, and trams are essential for daily commutes and reducing traffic congestion. These systems are often complemented by alternative modes of transport like bicycles and electric scooters, which promote sustainable and healthy living. In rural areas, cars, tractors, and bicycles are the primary means of transportation, reflecting the agricultural lifestyle and the need for mobility across vast distances. For longer journeys, airplanes and trains provide fast and efficient travel options. Air travel has made it possible to traverse continents in a matter of hours, while high-speed trains offer a convenient alternative for intercity travel. These advancements in transportation not only enhance connectivity but also contribute to economic growth and cultural exchange. The logistics industry, powered by an extensive network of roads, railways, and shipping routes, ensures the timely delivery of goods across the globe. The evolution of transportation continues to push boundaries, with innovations such as autonomous vehicles, hyperloop systems, and space travel on the horizon. These developments promise to further revolutionize the way we move and interact with the world.
Animals, both domestic and wild, are an integral part of our world, contributing to the biodiversity and ecological balance of our planet. Pets like dogs, cats, and birds bring joy and companionship to millions of households, becoming beloved members of families. They provide emotional support, encourage physical activity, and enhance overall well-being. In the wild, animals play vital roles in maintaining ecosystems and supporting biodiversity. Predators such as lions and wolves help control prey populations, ensuring a healthy balance in the food chain. Herbivores like deer and elephants contribute to the maintenance of vegetation and the dispersal of seeds. The diversity of animal life, from the smallest insects to the largest mammals, is a testament to the richness of our natural world. Conservation efforts are crucial in protecting endangered species and preserving habitats. Zoos, wildlife sanctuaries, and marine parks play an important role in educating the public about the importance of wildlife conservation and providing safe havens for threatened species.  `;

let start=0;
let end=0;

b=str.split('.');
let text = "";
let tarea=document.querySelector(".type");
let ins=document.querySelector(".instruction")
let res=document.querySelector(".result")
tarea.setAttribute("class","type blur") 

for(i=0;i<15;i++){
    let r=Math.floor(Math.random()*b.length);
    text +=b[r]+".";
    c=b[r].split(" ");
    tarea.innerHTML+="<span class='sentence'>";
    for(k=1;k<c.length;k++){
        d=c[k].split("");
        tarea.innerHTML+="<span class='word'>"
        for(j=0;j<d.length;j++){
            tarea.innerHTML+="<letter class='untype'>"+d[j]+"</letter>";
        }
        if(k==c.length-1){
            tarea.innerHTML+="</span>";

        }
        else{

            tarea.innerHTML+="<letter class='untype'>"+"\t"+"</letter>";
            tarea.innerHTML+="</span>";
        }
    }
    tarea.innerHTML+="<letter class='untype'>"+"."+"</letter>"+"<letter class='untype'>"+"\t"+"</letter>";
    tarea.innerHTML+="</span>";

}

let correct=0;
let corr=document.querySelector(".correct")
let incorrect=0;
let inco=document.querySelector(".incorrect")
let wpm=document.querySelector(".wpm")
let acc=document.querySelector(".acc")
let txt = "";

function findKeyPressed(event) {
    if(start==1){
   
    if(event.key == 'Backspace'){
        txt = txt.slice(0,-1);
        h[txt.length].setAttribute("class","untype active");
        h[txt.length+1].setAttribute("class","untype");


    }
   
    else if(event.key == ' '){
        txt += " ";
    for(i=txt.length-1;i<txt.length;i++){
if(event.key==tarea.innerText[i]){
  
    
    wco();
   }
   else{
  
    if(event.key==' '){
        wio(0)
         }else{
        
             wio(1);
            }
   }
      } 

        
       }
    
    
 
    else if(event.key.length>1){
     txt=txt;
    }

   else{
    txt += event.key;
    for(i=txt.length-1;i<txt.length;i++){
if(event.key==tarea.innerText[i]){

    co();
   }
   else{
    
 if(tarea.innerText[i]==' '){
io(0)
 }else{

     io(1);
    }
   }
      } 
     }
}
else{
     if(event.key=="Enter"&& end==0){
        starttime();
        ins.setAttribute("class","instruction hidden")
        tarea.setAttribute("class","type")
       
        start=1;
    }
}

}
let h= document.querySelectorAll(".untype");
function co(){
    h[txt.length].setAttribute("class","untype active");
h[txt.length-1].setAttribute("class","c");
}
function io(b){
    h[txt.length].setAttribute("class","untype active");
if(b==1){
    h[txt.length-1].setAttribute("class","i");}
    else{
        h[txt.length-1].setAttribute("class","i wi wordi");
    }
}
function wco(){
    h[txt.length].setAttribute("class","untype active");
    h[txt.length-1].setAttribute("class","c wordc");
    // h[txt.length-1].setAttribute("class","wc");
}
function wio(b){
    h[txt.length].setAttribute("class","untype active");

    if(b==1){
        h[txt.length-1].setAttribute("class","i wi");}
        else{
            h[txt.length-1].setAttribute("class","i wordi");
        }
}
t=document.getElementById('time');
count=60;
function starttime(){
    if(count>=0){
    setInterval(timer,1000)}
}
function timer(){
    count--;
    if(count<-1){

    }
    else if(count==-1){
        start=0;
        end=1;
cal();
// corr.innerText=correct;
// inco.innerText=incorrect;
wpm.innerHTML=correct;
highs(correct);
acc.innerText=parseInt((ccc*100)/(ccc+iii))+"%";
res.setAttribute("class","result update")
tarea.setAttribute("class","type dem hidden");
ins.setAttribute("class","instruction rel");
ins.innerHTML="Refresh the browser to restart."

    }
    else{

        t.innerText=count;
    }
}
let hw=document.querySelector(".hwpm")
hw.innerHTML=localStorage.getItem("hwpm")
let incc=0
let inpp=0
let worc=0;
let iii=0;
let ccc=0;
let twor=0;
function cal(){
console.log("Calculating...")
   let cw= document.querySelectorAll(`.word~.c,.word~.i`);



   for(i=0;i<cw.length;i++){
    if(cw[i].className=="c wordc"||cw[i].className=="c wordi"||cw[i].className=="c wi wordi"){
worc=worc+1;
if(worc>twor){
    if(incc==0 && inpp>0){
        ++correct;
    }
    else{
        ++incorrect;
    }
incc=0;
inpp=0
}twor=worc;
    }
    if(cw[i].className=="i"){
        ++incc;
        ++iii;
    }
    if(cw[i].className=="c"){
        ++inpp
        ++ccc;
    }

}



console.log("Calculation complete")
}
function highs(s){
    
    if(localStorage.getItem("hwpm")<s){
 localStorage.setItem("hwpm",s)
    }
  hw.innerHTML=s;

}
h[txt.length].setAttribute("class","untype active");

   document.addEventListener('keydown', findKeyPressed);




