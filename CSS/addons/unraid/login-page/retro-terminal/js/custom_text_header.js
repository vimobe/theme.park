
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// You must escape any backward slashes. "\\"

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
__   __(_) _ __ ___    ___  | |__    ___     _ __    ___ | |_ 
\ \ / /| || '_ ` _ \  / _ \ | '_ \  / _ \   | '_ \  / _ \| __|
 \ V / | || | | | | || (_) || |_) ||  __/ _ | | | ||  __/| |_ 
  \_/  |_||_| |_| |_| \___/ |_.__/  \___|(_)|_| |_| \___| \__|
                                                               
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
