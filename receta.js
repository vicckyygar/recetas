const recetasData = {
  desayuno: [
    {
      titulo: "Tostadas con Palta",
      img: "../paginasrandom/imagenes/panpalta.jpg",
      ingredientes: "Pan, palta, limón, sal.",
      receta: "Tostá el pan, pisá la palta con limón y sal, y serví sobre el pan."
    },
    {
      titulo: "Yogur con Frutas",
      img: "../paginasrandom/imagenes/yogurfruta.jpg",
      ingredientes: "Yogur natural, banana, frutillas, granola.",
      receta: "Cortá las frutas y mezclalas con yogur y granola."
    },
    {
      titulo: "Yogur con Granola",
      img: "../paginasrandom/imagenes/yogurgranola.jpg",
      ingredientes: "Yogur natural, granola, miel, frutas a elección.",
      receta: "Serví el yogur en un bowl, agregá granola y frutas picadas. Endulzá con miel si querés."
    },
    {
      titulo: "Huevo revuelto con Tostadas",
      img: "../paginasrandom/imagenes/paltahuevo.jpg",
      ingredientes: "Huevos, leche, manteca, pan.",
      receta: "Batí los huevos con un poco de leche, cociná con manteca. Serví con pan tostado."
    }
  ],
  almuerzo: [
    {
      titulo: "Ensalada Express",
      img: "../paginasrandom/imagenes/ensalada.jpg",
      ingredientes: "Lechuga, tomate, zanahoria, aceite de oliva.",
      receta: "Lava y corta los vegetales. Mezcla en un bol. Agrega sal, aceite de oliva y mezcla bien."
    },
    {
      titulo: "Omelette Rápido",
      img: "../paginasrandom/imagenes/omelete.jpg",
      ingredientes: "2 huevos, queso, cebolla, sal y pimienta.",
      receta: "Bate los huevos. Agrega cebolla, sal y pimienta. Cocina y agrega queso al final."
    },
    {
      titulo: "Pollo con Arroz",
      img: "../paginasrandom/imagenes/arrozpollo.jpg",
      ingredientes: "Pechuga de pollo, arroz, ajo, cebolla, caldo.",
      receta: "Dorá el pollo, agregá arroz, ajo, cebolla y caldo. Cociná todo junto hasta que esté listo."
    },
    {
      titulo: "Hamburguesa de Lentejas",
      img: "../paginasrandom/imagenes/lenteja.jpg",
      ingredientes: "Lentejas cocidas, cebolla, pan rallado, huevo, especias.",
      receta: "Procesá las lentejas con cebolla, mezclá con pan rallado y huevo. Formá hamburguesas y cociná."
    }
  ],
  cena: [
    {
      titulo: "Sopa de Verduras",
      img: "../paginasrandom/imagenes/sopa.jpg",
      ingredientes: "Zanahoria, papa, zapallo, cebolla, caldo.",
      receta: "Corta todo en cubos. Hierve en caldo 30 min. Procesa si querés textura cremosa."
    },
    {
      titulo: "Pizza Rápida",
      img: "../paginasrandom/imagenes/pisa.jpg",
      ingredientes: "Masa lista, salsa de tomate, queso, orégano.",
      receta: "Unta salsa sobre la masa, poné queso y orégano. Horneá 10-15 min a 200°C."
    },
    {
      titulo: "Sopa de Calabaza",
      img: "../paginasrandom/imagenes/sopacalabaza.jpg",
      ingredientes: "Calabaza, cebolla, caldo, crema.",
      receta: "Cociná calabaza y cebolla en caldo, procesá y agregá un poco de crema antes de servir."
    },
    {
      titulo: "Frittata de Verduras",
      img: "../paginasrandom/imagenes/tarta.jpg",
      ingredientes: "Huevos, zapallito, cebolla, queso.",
      receta: "Batí huevos, agregá verduras salteadas y queso. Cociná en sartén hasta que cuaje."
    }
  ],
  snacks: [
    {
      titulo: "Sándwich de Pollo",
      img: "../paginasrandom/imagenes/sambuche.jpg",
      ingredientes: "Pan, pollo cocido, lechuga, tomate, mayonesa.",
      receta: "Arma el sándwich con los ingredientes. Tostá si lo preferís caliente."
    },
    {
      titulo: "Tortilla de Papa",
      img: "../paginasrandom/imagenes/tortipaPA.jpg",
      ingredientes: "Papa, huevo, cebolla, sal.",
      receta: "Freí las papas y cebolla. Batí huevos, mezclá y cociná en sartén."
    },
    {
      titulo: "Chips de Batata",
      img: "../paginasrandom/imagenes/chips.jpg",
      ingredientes: "Batata, aceite de oliva, sal.",
      receta: "Cortá en rodajas finas, rociá con aceite y horneá hasta dorar. Agregá sal a gusto."
    },
    {
      titulo: "Fruta con Chocolate",
      img: "../paginasrandom/imagenes/CHOCOLATEFRUTA.jpg",
      ingredientes: "Frutillas o banana, chocolate derretido.",
      receta: "Sumergí las frutas en el chocolate derretido. Dejá enfriar para que se endurezca."
    }
  ]
};

const categorias = ['desayuno', 'almuerzo', 'cena', 'snacks'];

categorias.forEach(cat => {
  const contenedor = document.getElementById(cat);
  recetasData[cat].forEach(receta => {
    const card = document.createElement('div');
    card.className = 'receta';
    card.innerHTML = `
      <img src="${receta.img}" alt="${receta.titulo}">
      <div class="receta-content hidden">
        <h2>${receta.titulo}</h2>
        <p class="ingredientes"><strong>Ingredientes:</strong> ${receta.ingredientes}</p>
        <p><strong>Receta:</strong> ${receta.receta}</p>
        <div class="acciones">
          <i class="fa-regular fa-heart favorito" title="Agregar a favoritos"></i>
        </div>
      </div>
    `;
    card.querySelector('img').addEventListener('click', () => {
      const content = card.querySelector('.receta-content');
      content.classList.toggle('hidden');
    });
    contenedor.appendChild(card);
  });
});

function getTitulo(recetaEl) {
  return recetaEl.querySelector('h2').textContent.trim();
}
// Elementos necesarios
const modal = document.getElementById('modal-favoritos');
const favoritosLista = document.getElementById('favoritos-lista');
const btnFavoritos = document.getElementById('btn-ver-favoritos'); // Asegúrate de que este ID exista
const closeModal = document.getElementById('btn-cerrar-modal');
const cerrarModalIcon = document.getElementById('cerrar-modal');
const filtro = document.getElementById('filtro'); // Asegúrate de que este input exista
const recetas = document.querySelectorAll('.receta');

// Función para obtener el título de una receta
function getTitulo(receta) {
  return receta.querySelector('.titulo')?.textContent?.trim() || '';
}


  favoritosLista.innerHTML = '';
  if (favoritosRecetas.length > 0) {
    favoritosRecetas.forEach(receta => {
      const recetaClone = receta.cloneNode(true);
      // Elimina el icono de favorito para que no se duplique el evento
      const icono = recetaClone.querySelector('.favorito');
      if (icono) icono.remove();
      favoritosLista.appendChild(recetaClone);
    });
  } else {
    favoritosLista.innerHTML = '<p>No tienes favoritos aún.</p>';
  }


// Filtrar recetas por texto
if (filtro) {
  filtro.addEventListener('input', () => {
    const texto = filtro.value.toLowerCase();
    recetas.forEach(receta => {
      const ingredientes = receta.querySelector('.ingredientes')?.textContent?.toLowerCase() || '';
      receta.style.display = ingredientes.includes(texto) ? 'block' : 'none';
    });
  });
}




