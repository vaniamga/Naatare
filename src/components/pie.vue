<template>
    <footer class="footer">
        <div class="container text-center">
        <div class="row align-items-center">
            <div class="col-2">
            <img src="src/assets/imagenes/LogoColor.png" alt="Logo">
            </div> 
            <div class="col order-5 text-left"><h4>REDES</h4>
        <a href="https://t.me/tucanal" target="_blank" class="social-link">
    <i class="fab fa-telegram icon"></i>
    </a>
    <a href="https://wa.me/tunumero" target="_blank" class="social-link">
        <i class="fab fa-whatsapp icon"></i>
    </a>
        <a href="https://www.facebook.com/people/naatare/100063567849186/?mibextid=ZbWKwL" target="_blank" class="social-link">
        <i class="fab fa-facebook icon"></i>
        </a>
    <a href="https://www.tiktok.com/@naatare2650?_t=8fglDaJ4t7d&_r=1" target="_blank" class="social-link">
        <i class="fab fa-tiktok icon"></i>
    </a>
</div>
    <div class="col order-1 text-center">
            <i class="fas fa-map-marker-alt"></i>
            <h4>UBICACIÓN</h4>
            <p>Av. Tonaltecas 2650, Arboledas de San Gaspar, 45410 Tonalá, Jal.</p>
        </div>
        </div>
        <p class="mt-3">© 2023 Naatare. Todos los derechos reservados.</p>
    </div>
    </footer>
</template>

<style>
.footer {
    background-color: #3771C8;
    padding: 20px 0;
}

.footer img {
    max-width: 100px;
}

.footer a i {
    font-size: 24px;
    margin-right: 10px;
    
}
.footer a i:hover {
    color: purple;
}

.footer h4 {
    font-size: 20px;
    font-family:'Montserrat', sans-serif;
    color:#EBE741;
}

.footer p {
    color:white;
    font-size: 18px;
    font-family: 'Averia Serif Libre', cursive;
}

.footer p.mt-3 {
    margin-top: 10px;
    color:white;
    font-size: 15px;
    font-family: 'Averia Serif Libre', cursive;
}


.social-link {
    color: white; 
    margin-right: 20px; 
}

</style>
