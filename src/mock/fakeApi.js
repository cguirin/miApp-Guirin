const productos = [
    {
        id:'1',
        name:'Amnesia Haze Auto',
        stock:300,
        price: 20 ,
        description:'70% Sativa dominante',
        image:'../img/amnesia-haze.jpg',
        category:'Automaticas'
    },
    {
        id:'2',
        name:'Kix Lemon',
        stock:500,
        price:20,
        description:'60% Sativa',
        image:'../img/lemon-kix.jpg',
        category:'Automaticas'
    },
    {
        id:'3',
        name:'California Orange',
        stock:800,
        price: 25,
        description:'50% Sativa - 50% Indica',
        image:'../img/california-orange.jpg',
        category:'Fotoperiodicas'
    },
    {
        id:'4',
        name:'Frisian Duck ',
        stock:200,
        price:30,
        description:'80% Sativa 20% Indica',
        image:'../img/frisian-duck.jpg',
        category:'Fotoperiodicas'
    },
    {
        id:'5',
        name:'Victory THC - Auto',
        stock:600,
        price: 32,
        description:'80% Sativa Dominante',
        image:'../img/victory.jpg',
        category:'Medicinal'
    },
    {
        id:'6',
        name:'Red Pure',
        stock:800,
        price: 35,
        description:'70% Indica Dominante - Autoflorecente ',
        image:'../img/red-pure.jpg',
        category:'Medicinal'
    }
];

export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un problema, inténtelo más tarde');
            } else {
                resolve(productos);
            }
        }, 1000);
    });
};

export const getOneProduct = (productId) => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('Hubo un problema, inténtelo más tarde');
            } else {
                const product = productos.find(item => item.id === productId);
                if (product) {
                    resolve(product);
                } else {
                    reject('No se encontró el producto con el ID proporcionado');
                }
            }
        }, 1000);
    });
};
