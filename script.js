function resource(msg){alert(msg);}
function sendOrder(e){
 e.preventDefault();
 const name=document.getElementById("name").value.trim();
 const contact=document.getElementById("contact").value.trim();
 const type=document.getElementById("type").value;
 const details=document.getElementById("details").value.trim();
 const message=`BUNNY FX ORDER%0A%0AName: ${encodeURIComponent(name)}%0AContact: ${encodeURIComponent(contact)}%0AEdit: ${encodeURIComponent(type)}%0ADetails: ${encodeURIComponent(details)}`;
 // Replace the number below with your own WhatsApp number including country code.
 const whatsapp="919999999999";
 window.open(`https://wa.me/${whatsapp}?text=${message}`,"_blank");
}