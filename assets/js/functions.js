const saleAssets = [
    {
        id: 1,
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        title: "Apartamento de lujo en zona exclusiva",
        description: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        location:"123 Luxury Lane, Prestige Suburb, CA 45678",
        rooms: "4 Habitaciones",
        bathroom: "4 Baños",
        price: "5.000",
        smoke: false,
        pets: false,
    }, 
    {
        id: 2,
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        title: "Apartamento acogedor en la montaña",
        description: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        location:"789 Mountain Road, Summit Peaks, CA 23456",
        rooms: "2 Habitaciones",
        bathroom: "1 Baños",
        price: "1.200",
        smoke: true,
        pets: true,
    }, 
    {
        id: 3,
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        title: "Penthouse de lujo con terraza panorámica",
        description: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        location:"567 Skyline Avenue, Skyview City, CA 56789",
        rooms: "3 Habitaciones",
        bathroom: "3 Baños",
        price: "4.500",
        smoke: false,
        pets: true,
    }, 
    {
        id: 4,
        src: "/assets/img/sale-house.jpg",
        title: "Casa moderna en zona exclusiva",
        description: "Esta moderna casa de lujo está ubicado en una exclusiva zona residencial",
        location:"123 Luxury Lane, Prestige Suburb, CA 45678",
        rooms: "4 Habitaciones",
        bathroom: "4 Baños",
        price: "5.000",
        smoke: false,
        pets: false,
    }, 
];
const rentingAssets = [
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        title: "Apartamento en el centro de la ciudad",
        description: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        location:"123 Main Street, Anytown, CA 91234",
        rooms: "2 Habitaciones",
        bathroom: "2 Baños",
        price: "2.000",
        smoke: false,
        pets: true,
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title: "Apartamento luminoso con vista al mar",
        description: "Este hermoso apartamento ofrece una vista impresionante al mar",
        location:"456 Ocean Avenue, Seaside Town, CA 56789",
        rooms: "3 Habitaciones",
        bathroom: "3 Baños",
        price: "2.500",
        smoke: true,
        pets: true,
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        title: "Condominio moderno en zona residencial",
        description: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        location:"123 Main Street, Anytown, CA 91234",
        rooms: "2 Habitaciones",
        bathroom: "2 Baños",
        price: "5.000",
        smoke: false,
        pets: false,
    },
    {
        id: 8,
        src: "/assets/img/renting-house.jpg",
        title: "Apartamento pequeño en zona exclusiva",
        description: "Este apartamento está ubicado en el centro de Tokio",
        location:"123 Luxury Lane, Prestige Suburb, TK 45678",
        rooms: "1 Habitaciones",
        bathroom: "1 Baños",
        price: "5.000",
        smoke: false,
        pets: false,
    },
];
const saleAssetsIndex = [
    {
        id: 9,
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        title: "Apartamento de lujo en zona exclusiva",
        description: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        location:"123 Luxury Lane, Prestige Suburb, CA 45678",
        rooms: "4 Habitaciones",
        bathroom: "4 Baños",
        price: "5.000",
        smoke: false,
        pets: false,
    }, 
    {
        id: 10,
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        title: "Apartamento acogedor en la montaña",
        description: "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
        location:"789 Mountain Road, Summit Peaks, CA 23456",
        rooms: "2 Habitaciones",
        bathroom: "1 Baños",
        price: "1.200",
        smoke: true,
        pets: true,
    }, 
    {
        id: 11,
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        title: "Penthouse de lujo con terraza panorámica",
        description: "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
        location:"567 Skyline Avenue, Skyview City, CA 56789",
        rooms: "3 Habitaciones",
        bathroom: "3 Baños",
        price: "4.500",
        smoke: false,
        pets: true,
    }
]; 
const rentingAssetsIndex = [
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        title: "Apartamento en el centro de la ciudad",
        description: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        location:"123 Main Street, Anytown, CA 91234",
        rooms: "2 Habitaciones",
        bathroom: "2 Baños",
        price: "2.000",
        smoke: false,
        pets: true, 
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        title: "Apartamento luminoso con vista al mar",
        description: "Este hermoso apartamento ofrece una vista impresionante al mar",
        location:"456 Ocean Avenue, Seaside Town, CA 56789",
        rooms: "3 Habitaciones",
        bathroom: "3 Baños",
        price: "2.500",
        smoke: true,
        pets: true,
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        title: "Condominio moderno en zona residencial",
        description: "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
        location:"123 Main Street, Anytown, CA 91234",
        rooms: "2 Habitaciones",
        bathroom: "2 Baños",
        price: "5.000",
        smoke: false,
        pets: false,
    }
]

const addCard = (id, assets) => {
    const cardSection = document.querySelector(id)
    let cards = ""
    for (let asset of assets) {
        cards += `
            <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${asset.src}"
                class="card-img-top"
                alt="Imagen de ${asset.title} "
              ></img>
              <div class="card-body">
                <h5 class="card-title">
                  ${asset.title}
                </h5>
                <p class="card-text">
                  ${asset.description}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${asset.location}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${asset.rooms} |
                  <i class="fas fa-bath"></i> ${asset.bathroom}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${asset.price} </p>
                <p class="text-danger ${asset.smoke ? 'nodisplay' : ''} ">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>
                <p class="text-success ${asset.smoke ? '' : 'nodisplay'} ">
                  <i class="fas fa-smoking"></i> Permitido fumar
                </p>
                <p class="text-danger ${asset.pets ? 'nodisplay' : ''} ">
                  <i class="fas fa-ban"></i> No se permiten mascotas
                <p class="text-success ${asset.pets ? '' : 'nodisplay'} ">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
              </div>
            </div>
          </div>
        `
    }
    cardSection.innerHTML = cards
}

