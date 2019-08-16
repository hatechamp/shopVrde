let products = [ 
    { name: 'Acelga (Paq)', amount: 0, url: 'images/acelga.jpg', type: 'veggie' },
    // { name: 'Achicoria (500g)', amount: 0, url: 'images/achicoria.jpg', type: 'veggie' },
    // { name: 'Aji Vinagre (500g)', amount: 0, url: 'images/ajivinagre.jpg', type: 'veggie' },
    // { name: 'Ajo (x3)', amount: 0, url: 'images/ajo.jpg', type: 'veggie' },
    // { name: 'Albahaca (x2)', amount: 0, url: 'images/albahaca.jpg', type: 'veggie' },
    { name: 'Anco (kg)', amount: 0, url: 'images/anco.jpg', type: 'veggie' },
    // { name: 'Apio (kg)', amount: 0, url: 'images/apio.jpg', type: 'veggie' },
    { name: 'Banana (kg)', amount: 0, url: 'images/banana.jpeg', type: 'fruit', price: 55 },
    { name: 'Batata (kg)', amount: 0, url: 'images/batata.jpg', type: 'veggie' },
    { name: 'Boniato (kg)', amount: 0, url: 'images/boniato.jpg', type: 'veggie' },
    { name: 'Brocoli (kg)', amount: 0, url: 'images/brocoli.jpg', type: 'veggie' },
    // { name: 'Berenjena (kg)', amount: 0, url: 'images/berenjena.jpg', type: 'veggie' },
    // { name: 'Caboutie (kg)', amount: 0, url: 'images/caboutie.jpg', type: 'veggie' },
    { name: 'Cebolla (kg)', amount: 0, url: 'images/cebolla.jpg', type: 'veggie' },
    { name: 'Cebolla Morada (kg)', amount: 0, url: 'images/cebollamorada.jpg', type: 'veggie' },
    // { name: 'Chaucha (kg)', amount: 0, url: 'images/chaucha.jpg', type: 'veggie' },
    // { name: 'Cilantro (kg)', amount: 0, url: 'images/cilantro.jpg', type: 'veggie' },
    // { name: 'Ciruela (kg)', amount: 0, url: 'images/ciruela.jpg', type: 'fruit', price: 70 },   
    // { name: 'Choclo x 2', amount: 0, url: 'images/choclo.jpg', type: 'veggie' },
    { name: 'Coliflor (uni)', amount: 0, url: 'images/coliflor.jpg', type: 'veggie' },
    // { name: 'Durazno (kg)', amount: 0, url: 'images/durazno.jpg', type: 'fruit', price: 70 },
    { name: 'Espinaca (500g)', amount: 0, url: 'images/espinaca.jpg', type: 'veggie' },
    { name: 'Hinojo (Uni)', amount: 0, url: 'images/hinojo.jpg', type: 'veggie' },   
    { name: 'Kale Morado (400g)', amount: 0, url: 'images/kalemorado.jpg', type: 'veggie' },
    { name: 'Kale (400g)', amount: 0, url: 'images/kale.jpg', type: 'veggie' },
    // { name: 'Kiwi (kg)', amount: 0, url: 'images/kiwi.jpg', type: 'fruit', price: 70 },
    { name: 'Lechuga (500g)', amount: 0, url: 'images/lechugacrespa.jpg', type: 'veggie' },
    // { name: 'Lechuga Mantecosa (1/2kg)', amount: 0, url: 'images/lechugacrespa.jpg', type: 'veggie' },
    // { name: 'Lima (1/2 kg)', amount: 0, url: 'images/lima.jpg', type: 'veggie' },
    { name: 'Limon (kg)', amount: 0, url: 'images/limon.jpg', type: 'fruit', price: 60 },
    // { name: 'Melon (kg)', amount: 0, url: 'images/melon.jpg', type: 'fruit', price: 80 },
    // { name: 'Mango (kg)', amount: 0, url: 'images/mango.jpg', type: 'fruit', price: 80 },
    { name: 'Manzana Roja (kg)', amount: 0, url: 'images/manzana.jpg', type: 'fruit', price: 65 },
    { name: '2Kg Manzana Roja', amount: 0, url: 'images/manzana.jpg', type: 'fruit', price: 100 },
    { name: 'Manzana Verde (kg)', amount: 0, url: 'images/manzanaverde.jpg', type: 'fruit', price: 80 },
    { name: 'Mandarina (kg)', amount: 0, url: 'images/mandarina.jpg', type: 'fruit', price: 65 },
    // { name: 'Maracuya (kg)', amount: 0, url: 'images/maracuya.jpg', type: 'fruit', price: 100 },
    // { name: 'Morron Verde(kg)', amount: 0, url: 'images/morron.jpg', type: 'veggie' },
    // { name: 'Morron Rojo(kg)', amount: 0, url: 'images/morronrojo.jpg', type: 'veggie' },
    // { name: 'Nabo (paq)', amount: 0, url: 'images/nabo.jpg', type: 'veggie' },
    { name: 'Naranja (kg)', amount: 0, url: 'images/naranja.jpg', type: 'fruit', price: 55 },
    // { name: 'Pack Choi (kg)', amount: 0, url: 'images/packchoi.jpg', type: 'veggie' },
    { name: 'Palta (500g)', amount: 0, url: 'images/palta.jpg', type: 'fruit', price: 70 },
    { name: 'Papa (kg)', amount: 0, url: 'images/papa.jpg', type: 'veggie' },
    // { name: 'Papa Colorada (kg)', amount: 0, url: 'images/papacolorada.jpg', type: 'veggie' },
    { name: 'Pomelo Rosado (kg)', amount: 0, url: 'images/pomelo.jpg', type: 'fruit', price: 70 },  
    // { name: 'Pelon (kg)', amount: 0, url: 'images/pelon.jpg', type: 'fruit', price: 75 },
    // { name: 'Pepino (kg)', amount: 0, url: 'images/pepino.jpg', type: 'veggie' },
    { name: 'Pera (kg)', amount: 0, url: 'images/pera.jpeg', type: 'fruit', price: 70 },
    { name: 'Perejil (400g)', amount: 0, url: 'images/perejil.jpg', type: 'veggie' },
    { name: 'Puerro (PAQ)', amount: 0, url: 'images/puerro.jpg', type: 'veggie' },
    { name: 'Rabanito (500g)', amount: 0, url: 'images/rabanito.jpg', type: 'veggie' },
    // { name: 'Radicheta (500g)', amount: 0, url: 'images/radicheta.jpg', type: 'veggie' },
    { name: 'Repollo (kg)', amount: 0, url: 'images/repollo.jpg', type: 'veggie' },
    { name: 'Repollito de Brusela (1/2kg)', amount: 0, url: 'images/repollitobrusela.jpg', type: 'veggie', price: 50 },
    { name: 'Remolacha (PAQ)', amount: 0, url: 'images/remolacha.jpg', type: 'veggie' },
    // { name: 'Rucula (500g)', amount: 0, url: 'images/rucula.jpg', type: 'veggie' },
    // { name: 'Sandia (kg)', amount: 0, url: 'images/watermelon.jpg', type: 'fruit', price: 40 },
    // { name: 'Tomate (kg)', amount: 0, url: 'images/tomate.jpg', type: 'veggie' },
    // { name: 'Toronja (uni)', amount: 0, url: 'images/toronja.jpg', type: 'fruit', price: 50 },
    // { name: 'Tomate Cherry (500g)', amount: 0, url: 'images/tomatecherry.jpg', type: 'veggie' },
    // { name: 'Uva (500g)', amount: 0, url: 'images/uva.jpg', type: 'fruit', price: 50 },
    { name: 'Verdeo (500g)', amount: 0, url: 'images/verdeo.jpg', type: 'veggie' },
    { name: 'Zanahoria (PAQ)', amount: 0, url: 'images/zanahoria.jpg', type: 'veggie' },
    // { name: 'Zapallito (kg)', amount: 0, url: 'images/zapallitos.jpg', type: 'veggie' },
    // { name: 'Zuchinni (kg)', amount: 0, url: 'images/zuchinni.jpg', type: 'veggie' },
    // { name: 'Arroz Organico (kg)', amount: 0, url: 'images/arrozorganico.jpg', type: 'meal', price: 100 },
    // { name: 'Budin banana y frutos rojos', amount: 0, url: 'images/budinbananafrutosrojos.jpg', type: 'meal', price: 90 },
    // { name: 'Budin banana y pera', amount: 0, url: 'images/budinbananapera.jpg', type: 'meal', price: 90 },
    // { name: 'Budin cacao amargo y frutos secos', amount: 0, url: 'images/cacaoamargo.jpg', type: 'meal', price: 90 },
    // { name: 'Berenjenas al Escabeche (440g)', amount: 0, url: 'images/berenjenasescabeche.jpg', type: 'meal', price: 130 },
    { name: 'Jengibre (100g)', amount: 0, url: 'images/jengibre.jpg', type: 'meal', price: 30 },
    { name: 'Cúrcuma (100g)', amount: 0, url: 'images/curcuma.jpeg', type: 'meal', price: 30 },
    { name: 'Champiñon (100g)', amount: 0, url: 'images/champi.jpg', type: 'meal', price: 45 },
    { name: 'Portobello (100g)', amount: 0, url: 'images/portobello.jpg', type: 'meal', price: 45 },
    { name: 'Shitake (100g)', amount: 0, url: 'images/shitake.jpg', type: 'meal', price: 60 },
    { name: 'Gírgolas (100g)', amount: 0, url: 'images/girgolas.jpg', type: 'meal', price: 60 },
    { name: 'Queso Gouda (100g)', amount: 0, url: 'images/queso.jpeg', type: 'meal', price: 55 },
    { name: 'Nueces de Catamarca (500g)', amount: 0, url: 'images/nueces.jpg', type: 'meal', price: 200 },
    { name: 'Mani pelado (500g)', amount: 0, url: 'images/mani.jpg', type: 'meal', price: 200 },
    { name: 'Mix Frutos secos (500g)', amount: 0, url: 'images/mixeco.jpg', type: 'meal', price: 200 },
    { name: 'Vino Biodinámico (750ml)', amount: 0, url: 'images/vino.jpg', type: 'meal', price: 180 },
    { name: 'Tomate Triturado (1L)', amount: 0, url: 'images/tomatetriturado.jpg', type: 'meal', price: 100 },
    // { name: 'Chucrut (400 cm2)', amount: 0, url: 'images/chucrut.jpg', type: 'meal', price: 100 },
    { name: 'Garbanzos (500g)', amount: 0, url: 'images/garbanzo.jpg', type: 'meal', price: 55 },
    { name: 'Mijo (500g)', amount: 0, url: 'images/mijo.jpg', type: 'meal', price: 55 },
    { name: 'Lentejas (500g)', amount: 0, url: 'images/lenteja.jpg', type: 'meal', price: 55 },
    // { name: 'Poroto Mung (500g)', amount: 0, url: 'images/porotomung.jpg', type: 'meal', price: 55 },
    { name: 'Soja (500g)', amount: 0, url: 'images/soja.jpg', type: 'meal', price: 55 },
    { name: 'Trigo candeal (500g)', amount: 0, url: 'images/trigo.jpg', type: 'meal', price: 55 },
    { name: 'Poroto Colorado (500g)', amount: 0, url: 'images/porotocolorado.jpg', type: 'meal', price: 55 },
    { name: 'Poroto Negro (500g)', amount: 0, url: 'images/porotonegro.jpg', type: 'meal', price: 55 },
    { name: 'Avena arrollada (500g)', amount: 0, url: 'images/avena.jpg', type: 'meal', price: 55 },
    { name: 'Polenta "Del Campo" (500g)', amount: 0, url: 'images/polenta.jpg', type: 'meal', price: 60 },
    // { name: 'Azucar Mascabo (1kg)', amount: 0, url: 'images/azucarmascabo.jpg', type: 'meal', price: 160 },
    // { name: 'Fideos integrales "Campo Claro" (500g)', amount: 0, url: 'images/fideointegral.jpg', type: 'meal', price: 130 },
    // { name: 'Arroz Yamaní Integral "Schatzi" (500g)', amount: 0, url: 'images/arrozyamani.jpg', type: 'meal', price: 90 },
    { name: 'Arroz grano largo integral "Schatzi" (500g)', amount: 0, url: 'images/arrozlargointegral.jpg', type: 'meal', price: 80 },
    { name: 'Granola (250g)', amount: 0, url: 'images/granolaintegral.jpg', type: 'meal', price: 80 },
    // { name: 'Azucar rubia orgánica "Schatzi" (500g)', amount: 0, url: 'images/azucarrubia.jpg', type: 'meal', price: 65 },
    // { name: 'Queso crema "La Choza" (175grs)', amount: 0, url: 'images/quesocrema175.jpg', type: 'meal', price: 85 },
    // { name: 'Yogurt Natural descremado "La Choza" (1Lt)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 160 },
    // { name: 'Yogurt Entero de Mora "La Choza" (1Lt)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 200 },
    // { name: 'Yogurt Descremado de Frutos Rojos "La Choza" (1Lt)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 200 },
    // { name: 'Yogurt Natural Descremado "La Choza" (175g)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 50 },
    // { name: 'Yogurt Entero de Vainilla "La Choza" (175g)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 60 },
    // { name: 'Yogurt Entero de Mora "La Choza" (175g)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 60 },
    // { name: 'Yogurt Entero de Frutilla "La Choza" (175g)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 60 },
    // { name: 'Yogurt Descremado de Frutos del Bosque "La Choza" (175g)', amount: 0, url: 'images/yogurtchoza.jpg', type: 'meal', price: 60 },
    // { name: 'Raviolones orgánicos integrales de Calabaza y Queso "Dilaupé" (10 u)', amount: 0, url: 'images/raviolesintegrales.jpg', type: 'meal', price: 180 },
    // { name: 'Ravioles orgánicos integrales de Espinaca y Ricota "Dilaupé" (Plancha)', amount: 0, url: 'images/raviolesintegrales.jpg', type: 'meal', price: 110 },
    // { name: 'Sorrentinos orgánicos integrales de Verdura y Ricota "Dilaupé" (10 u)', amount: 0, url: 'images/sorrentinosintegrales.jpg', type: 'meal', price: 180 },
    // { name: 'Sorrentinos orgánicos integrales de Ricota, Ciboulette y Nuez "Dilaupé" (10 u)', amount: 0, url: 'images/sorrentinosintegrales.jpg', type: 'meal', price: 180 },
    { name: 'Fideos orgánicos integrales de Zanahoria "Dilaupé" (1/4kg)', amount: 0, url: 'images/fideointegralcolor.jpg', type: 'meal', price: 110 },
    { name: 'Fideos orgánicos integrales de Remolacha "Dilaupé" (1/4kg)', amount: 0, url: 'images/fideointegralcolor.jpg', type: 'meal', price: 110 },
    // { name: 'Fideos orgánicos integrales de Morrón "Dilaupé" (1/4kg)', amount: 0, url: 'images/fideointegralcolor.jpg', type: 'meal', price: 110 },
    { name: 'Fideos orgánicos integrales de Espinaca "Dilaupé" (1/4kg)', amount: 0, url: 'images/fideointegralcolor.jpg', type: 'meal', price: 110 },
    // { name: 'Fideos orgánicos integrales al huevo "Dilaupé" (1/4kg)', amount: 0, url: 'images/fideointegralcolor.jpg', type: 'meal', price: 110 },
    // { name: 'Tartita orgánica integral de Espinaca "Dilaupé" (1u)', amount: 0, url: 'images/tartaespinaca.jpg', type: 'meal', price: 100 },
    // { name: 'Tartita orgánica integral de Calabaza "Dilaupé" (1u)', amount: 0, url: 'images/tartacalabaza.jpg', type: 'meal', price: 100 },
    // { name: 'Tartita orgánica integral de Pollo "Dilaupé" (1u)', amount: 0, url: 'images/tartapollo.jpg', type: 'meal', price: 100 },
    // { name: 'Tartita orgánica integral de Puerro "Dilaupé" (1u)', amount: 0, url: 'images/tartapuerro.jpg', type: 'meal', price: 100 },
    // { name: 'Tartita orgánica integral de Humita "Dilaupé" (1u)', amount: 0, url: 'images/tartahumita.jpg', type: 'meal', price: 100 },
    // { name: 'Granola (250g)', amount: 0, url: 'images/granola.jpg', type: 'meal', price: 75 },
    // { name: 'Hamburguesas veganas de lenteja y berenjena (x3)', amount: 0, url: 'images/hamburguesaquinoa.jpg', type: 'meal', price: 100 },
    // { name: 'Hamburguesas veganas de porotos adzuki y quinoa (x3)', amount: 0, url: 'images/hamburguesaquinoa.jpg', type: 'meal', price: 100 },
    // { name: 'Hamburguesas veganas de yamani y mix de veg (x3)', amount: 0, url: 'images/hamburguesaquinoa.jpg', type: 'meal', price: 100 },
    // { name: 'Falafels de Garbanzos (x3)', amount: 0, url: 'images/falafelgarbanzo.jpg', type: 'meal', price: 100 },
    // { name: 'Helado banana y mango vegano (200cc)', amount: 0, url: 'images/heladomangobananavegano.jpg', type: 'meal', price: 60 },
    { name: 'Huevos (x12)', amount: 0, url: 'images/huevos.jpg', type: 'meal', price: 90 },
    { name: 'Maple Huevos (x30)', amount: 0, url: 'images/huevos.jpg', type: 'meal', price: 225 },
    { name: 'Huevos (x6)', amount: 0, url: 'images/huevos.jpg', type: 'meal', price: 50 },
    // { name: 'Mermelada de ciruela (400cc)', amount: 0, url: 'images/mermelada.jpg', type: 'meal', price: 120 },
    { name: 'Miel Pura del delta (1Kg)', amount: 0, url: 'images/mielkg.jpeg', type: 'meal', price: 240 },
    { name: 'Miel Pura del delta (1/2Kg)', amount: 0, url: 'images/mielmedio.jpeg', type: 'meal', price: 135 },
    // { name: 'Mermelada de ciruela (400cc)', amount: 0, url: 'images/mermelada.jpg', type: 'meal', price: 120 },
    // { name: 'Milanesas de berenjenas (500g)', amount: 0, url: 'images/milanesaberenjena.jpg', type: 'meal', price: 100 },
    // { name: 'Morrones verdes en almibar (830g)', amount: 0, url: 'images/morronalmibar2.jpeg', type: 'meal', price: 100 },
    // { name: 'Pastel de Batata y Lentejas (700g)', amount: 0, url: 'images/pastelbatata.jpg', type: 'meal', price: 150 },
    // { name: 'Tarta de calabaza y berenjena', amount: 0, url: 'images/tartavariedad.jpg', type: 'meal', price: 110 },
    // { name: 'Tarta de zapallito y puerro', amount: 0, url: 'images/tartavariedad.jpg', type: 'meal', price: 110 },
    // { name: 'Souflé. Mix de Vegetales con masa de calabaza ', amount: 0, url: 'images/soufle.jpg', type: 'meal', price: 100 }
    // { name: 'Tortilla vegana', amount: 0, url: 'images/tortillavegana.jpg', type: 'meal', price: 90 }
    { name: 'Aceit Verdes "Simone" (100g)', amount: 0, url: 'images/aceitunaverdekilo.jpeg', type: 'meal', price: 40 },
    // { name: 'Aceit Verdes "Simone" (1Kg)', amount: 0, url: 'images/aceitunaverdekilo.jpeg', type: 'meal', price: 350 },
    { name: 'Aceit Negras "Simone" (100g)', amount: 0, url: 'images/aceitunanegrakilo.jpeg', type: 'meal', price: 40 },
    // { name: 'Aceit Negras "Simone" (1Kg)', amount: 0, url: 'images/aceitunanegrakilo.jpeg', type: 'meal', price: 350 },
    { name: 'Aceit Griegas "Simone" (100g)', amount: 0, url: 'images/aceitunagriegakilo.jpeg', type: 'meal', price: 40 },
    // { name: 'Aceit Griegas "Simone" (1Kg)', amount: 0, url: 'images/aceitunagriegakilo.jpeg', type: 'meal', price: 350 },
    // { name: 'Aceite de Oliva "Simone" (1L)', amount: 0, url: 'images/aceiteoliva.jpg', type: 'meal', price: 450 },
    // { name: 'Barrita de cereal vegana x3', amount: 0, url: 'images/barritacereal.jpg', type: 'meal', price: 100 },
]
products = products.sort()

let discounts = [
    { amount: "1", price: 55 },
    { amount: "2", price: 52.50 },
    { amount: "3", price: 50 },
    { amount: "4", price: 47.50 },
    { amount: "5+", price: 45 },
    //{ amount: "60 > 200", price: 41 },
    //{ amount: "200 > 250", price: 36 },
    //{ amount: "250 >", price: 32 }
]


//Scroll top on pageload
window.addEventListener('scroll', function (evt) {

    var distance_from_top = document.documentElement.scrollTop

    if (distance_from_top === 0) {
        document.getElementsByClassName("search")[0].classList.remove("fixed");
    }

    if (distance_from_top > 0) {
        document.getElementsByClassName("search")[0].classList.add("fixed");
    }

});