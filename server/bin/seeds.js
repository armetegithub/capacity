// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Foundation = require ("../models/Foundation");
const Project = require("../models/Project");
require("dotenv").config();

const bcryptSalt = 10;

mongoose
  .connect(`${process.env.DBURL}`, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


  //User id's


const user1 = new mongoose.mongo.ObjectId();
const user2 = new mongoose.mongo.ObjectId();
const user3 = new mongoose.mongo.ObjectId();
const user4 = new mongoose.mongo.ObjectId();
const user5 = new mongoose.mongo.ObjectId();
const user6 = new mongoose.mongo.ObjectId();
const user7 = new mongoose.mongo.ObjectId();
const user8 = new mongoose.mongo.ObjectId();
const user9 = new mongoose.mongo.ObjectId();
const user10 = new mongoose.mongo.ObjectId();


const found1 = new mongoose.mongo.ObjectId();
const found2 = new mongoose.mongo.ObjectId();
const found3 = new mongoose.mongo.ObjectId();
const found4 = new mongoose.mongo.ObjectId();
const found5 = new mongoose.mongo.ObjectId();
const found6 = new mongoose.mongo.ObjectId();
const found7 = new mongoose.mongo.ObjectId();
const found8 = new mongoose.mongo.ObjectId();
const found9 = new mongoose.mongo.ObjectId();
const found10 = new mongoose.mongo.ObjectId();

const proj1 = new mongoose.mongo.ObjectId();
const proj2 = new mongoose.mongo.ObjectId();
const proj3 = new mongoose.mongo.ObjectId();
const proj4 = new mongoose.mongo.ObjectId();
const proj5 = new mongoose.mongo.ObjectId();
const proj6 = new mongoose.mongo.ObjectId();
const proj7 = new mongoose.mongo.ObjectId();
const proj8 = new mongoose.mongo.ObjectId();
const proj9 = new mongoose.mongo.ObjectId();
const proj10 = new mongoose.mongo.ObjectId();







let users = [
  {
    _id: user1,
    username: "momo",
    email: "dedwdew@dewdew.com",
    discapacity: "Física",
    password: bcrypt.hashSync("momo", bcrypt.genSaltSync(bcryptSalt)),
    comunidad: "Cantabria",
    foundations_created: [found1],
    projects_suscribe:[proj10]
  },
  {
    _id:user2,
    username: "Luciano",
    email: "delrdew@dewdew.com",
    password: bcrypt.hashSync("Luciano", bcrypt.genSaltSync(bcryptSalt)),
    discapacity: "Física",
    comunidad: "País Vasco",
    foundations_created: [found2],
    projects_suscribe:[proj9],

  }, 
  {
    _id:user3,
    username: "Pedro",
    email: "deoodew@dewdew.com",
    password: bcrypt.hashSync("Pedro", bcrypt.genSaltSync(bcryptSalt)),
    discapacity: "",
    comunidad: "Galicia",
    foundations_created: [found3],
    projects_suscribe:[proj8]
  }, 

  {
    _id: user4,
    username: "Laura",
    email: "deersdew@dewdew.com",
    password: bcrypt.hashSync("Laura", bcrypt.genSaltSync(bcryptSalt)),
    discapacity: "Psíquica",
    comunidad: "País Vasco",
    foundations_created: [found4],
    projects_suscribe:[proj7]
  }, 

  {
    _id: user5,
    username: "Cristina",
    email: "deerpeqw@dewdew.com",
    password: bcrypt.hashSync("Cristina", bcrypt.genSaltSync(bcryptSalt)),
    discapacity: "",
    comunidad: "Asturias",
    foundations_created: [found5],
    proyects_suscribe:[proj6]

  }, 

  {
    _id: user6,
    username: "Pablo",
    email: "loperqw@dewdew.com",
    password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
    discapacity: "Psíquica",
    comunidad: "Cataluña",
    foundations_created: [found6],
    projects_suscribe:[proj5]
  },

  {
    _id:user7,
    username: "Frnacisco",
    email: "lrereerqw@dewdew.com",
    password: bcrypt.hashSync("Pablo", bcrypt.genSaltSync(bcryptSalt)),
    discapacity: "",
    comunidad: "Andalucía",
    foundations_created: [found7],
    projects_suscribe:[proj4]
   

  },

  {

    _id:user8,
    username: "Francisco",
    email: "wwpekew@dewdew.com",
    password: bcrypt.hashSync("Francisco", bcrypt.genSaltSync(bcryptSalt)),
    discapacity: "",
    comunidad: "Asturias",
    foundations_created: [found8],
    projects_suscribe:[proj3]
  },

  {
    
    _id:user9,
    username: "Margarita",
    email: "wwloxkew@dewdew.com",
    password: bcrypt.hashSync("Margarita", bcrypt.genSaltSync(bcryptSalt)),
    discapacity: "Psíquica",
    comunidad: "Comunidad Valenciana",
    foundations_created: [found9],
    projects_suscribe:[proj2]
  },
  {
    
    _id:user10,
    username: "Sofía",
    email: "ww4d3ew@dewdew.com",
    password: bcrypt.hashSync("Sofía", bcrypt.genSaltSync(bcryptSalt)),
    discapacity: "Psíquica",
    comunidad: "Comunidad de Madrid",
    foundations_created: [found10],
    projects_suscribe:[proj1]

  },


  
]






let foundations = [


  {
    _id: found1,
    name: "Fundación Once", 
    description: "El objetivo principal de Fundación ONCE consiste en la realización de programas de integración laboral-formación y empleo para personas con discapacidad, y accesibilidad global, promoviendo la creación de entornos, productos y servicios globalmente accesibles.",
    email: "ewqewqeqwdwq@gmail.com",
    comunidad: "Comunidad de Madrid",
    imageURL: "https://prnoticias.com/media/k2/items/cache/82b4e06eeb1257ca1505cd212e65d75c_XL.jpg?t=1569487617",
    admin: user1,
    projects: [proj1]

  }, 

 {
   _id:found2,
   name: "Fundación universia", 
   description: "Fundación Universia es una entidad privada sin ánimo de lucro promovida por Universia, la red de cooperación universitaria de habla hispana y portuguesa, constituida por 1.401 instituciones de educación superior en 23 países de Iberoamérica, con el objetivo de impulsar la inclusión laboral de las personas con discapacidad.",
   email: "ewqewqeqwdwq@gmail.com",
   comunidad: "Cataluña",
   admin: user2,
   imageURL: "https://autismomadrid.es/wp-content/uploads/2014/06/logo_fundacion_universia.jpg",
   projects: [proj2]
 },


 {
   _id:found3,
   name: "PREDIF",
   description: "PREDIF, la Plataforma Representativa Estatal de Personas con Discapacidad Física, es una entidad sin ánimo de lucro de ámbito estatal, declarada de utilidad pública, que representa y promueve acciones a favor de casi 100.000 personas con discapacidad física.",
   email:"reojwrjeow@gmail.com",
   comunidad: "Comunidad valenciana",
   admin: user3,
   imageURL: "https://lh3.googleusercontent.com/proxy/QYvdLbDu7Jt9TUHhu6CvrgPnX1tqr8zYoqXasEZg6mnAGwQkAhE0aegPt5V-Y9WxutXKzMhbC2N7XXJsPthNunQduYJKB4QY91SeSWPaNQeDLhl92OeWSTg",
   projects: [proj3]

 },
 {

  _id:found4,
  name: "FEDER",
  description: "Las enfermedades raras son las más desconocidas y pueden afectar tanto al ámbito físico como al intelectual de la persona. FEDER es una de las asociaciones para discapacitados, cuya labor es especialmente importante para dar visibilidad al colectivo de discapacitados afectados por enfermedades raras. En la actualidad representa a más de 3 millones de personas, pacientes y familias.",
  email: "refefe@yahoo.com",
  comunidad: "Comunidad de Madrid",
  admin: user4,
  imageURL: "https://enfermedades-raras.org/images/fundacionfederslider.jpg",
  projects: [proj4]


 },


 {

  _id:found5,
  name: "FEDACE",
  description: "En España 420.064 personas viven con Daño Cerebral Adquirido y para muchos de ellos enfrentarse a su nueva situación es costoso. Asociaciones como FEDACE defiende la atención al Daño Cerebral Adquirido a través de servicios socio sanitarios públicos de calidad y coordinados entre sí.",
  email: "fedace@yahoo.com",
  comunidad: "País Vasco",
  admin: user5,
  imageURL: "https://fedace.org/files/MSCFEDACE/2020-2/27-14-5-19.admin.captura1.jpg",
  projects: [proj5]



 },

 {

  _id:found6,
  name: "AMEB",
  description: "La Asociación Madrileña de Espina Bífida (AMEB) es una asociación sin ánimo de lucro, declarada de Utilidad Pública por el Ministerio del Interior en el año 2007. Fue creada en mayo de 1976 por un grupo de padres que querían hacer frente a los problemas que presentaba la educación y rehabilitación de los niños y jóvenes afectados por esta patología.",
  email: "fedace@yahoo.com",
  comunidad: "Comunidad de Madrid",
  admin: user6,
  imageURL: "https://ameb.es/wp-content/uploads/2020/02/logo-AMEB-01.jpg",
  projects: [proj6]



 },
{
 _id:found7,
  name: "ASOCIDE",
  description: "ASOCIDE, la Asociación de Sordociegos de España, es una entidad sin ánimo de lucro que comenzó su actuación en el año 1993, teniendo como fines buscar, crear y fomentar todo tipo de actuaciones que permitan cubrir las necesidades específicas de las personas sordociegas en todos los ámbitos, para mejorar su calidad de vida, procurando su desarrollo humano, intelectual y social.",
  email: "asocide@yahoo.com",
  comunidad: "Andalucía",
  admin: user7,
  imageURL: "http://www.discapacidadenandalucia.es/wp-content/uploads/2018/02/25-a%C3%B1os-asocide.png",
  projects: [proj7]

 },
 {
  _id:found8,
   name: "AMEM/SFCDI",
   description: "La Asociación Nacional para Problemas de Crecimiento, CRECER, es una organización sin ánimo de lucro, cuya razón de ser es la asistencia, en todos los aspectos, a personas con problemas de crecimiento.",
   email: "crecimientoe@yahoo.com",
   comunidad: "Extremadura",
   admin: user8,
   imageURL: "https://lh3.googleusercontent.com/proxy/QYvdLbDu7Jt9TUHhu6CvrgPnX1tqr8zYoqXasEZg6mnAGwQkAhE0aegPt5V-Y9WxutXKzMhbC2N7XXJsPthNunQduYJKB4QY91SeSWPaNQeDLhl92OeWSTg",
   projects: [proj8]
 
  },

  {
    _id:found9,
     name: "ASEM",
     description: "La Federación Española de Enfermedades Neuromusculares –Federación ASEM-, es una organización sin ánimo de lucro, declarada de Utilidad Pública, que agrupa y representa a las distintas entidades de personas con enfermedades neuromusculares y sus familias. Trabaja para mejorar su calidad de vida, promoviendo y defendiendo sus derechos, impulsando la investigación y fomentando el conocimiento de estas enfermedades en la sociedad. En la actualidad agrupa a 26 asociaciones, representando a las 60.000 personas que se calcula que conviven con una enfermedad neuromuscular en nuestro país",
     email: "asem@yahoo.com",
     comunidad: "Castilla-La Mancha",
     admin: user9,
     imageURL: "https://isanidad.com/wp-content/uploads/2017/03/ASEM.jpg",
     projects: [proj9]
   
    },
    {
      _id:found10,
       name: "APASCOVI",
       description: "En APASCOVI tratamos de dar respuesta a las necesidades de las personas con discapacidad intelectual desde el nacimiento hasta la edad adulta. Gestionamos centros y servicios en varios municipios y somos un referente en la Comunidad de Madrid.",
       email: "apascovi@yahoo.com",
       comunidad: "Comunidad de Madrid",
       admin: user10,
       imageURL: "https://apascovifundacion.org/wp-content/uploads/2018/04/logo-40-A%C3%91OS-1.jpg",
       projects: [proj10]
     
      },
    
  ]

  let projects = [

    {
      _id: proj1,
      name: "Beca Master en Data science",
      info: "Maser en ciencia de datos. Conviértete en un profesional de sector",
      imageURL: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
      project_type: "beca",
      foundation: found1,
      subscribers:[]

    },

    {
      _id:proj2,
      name: "Programador en Java",
      info: "Puresto vacante de programador en Java",
      imageURL: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      project_type: "trabajo",
      foundation: found2,
      subscribers:[]

    },

    {
      _id:proj3,
      name: "Beca universitaria",
      info: "Beca doctorado en derecho",
      imageURL: "https://static3.burgosconecta.es/www/multimedia/201904/08/media/cortadas/beca-kItE-U701114614184QLD-624x385@El%20Norte.jpg",
      project_type: "beca",
      foundation: found3,
      subscribers:[]

    },

    {
      _id:proj4,
      name: "Clases de Natación",
      info: "Clases de natación en Madrid",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Daniel_Dias_ganha_ouro_na_Nata%C3%A7%C3%A3o_modalidade_100m_livre_S5_%2829122807774%29.jpg/300px-Daniel_Dias_ganha_ouro_na_Nata%C3%A7%C3%A3o_modalidade_100m_livre_S5_%2829122807774%29.jpg",
      project_type: "actividad",
      foundation: found4,
      subscribers:[]

    },

    {
      _id:proj5,
      name: "Administrativo",
      info: "Buscamos administrativo en Madrid",
      imageURL: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80s",
      project_type: "trabajo",
      foundation: found5,
      subscribers:[]

    },

    {
      _id:proj6,
      name: "Visita a la Alhambra",
      info: "Visita a la Alhambra en Granada",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/270px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg",
      project_type: "actividad",
      foundation: found6,
      subscribers:[]

    },

    {
      _id:proj7,
      name: "Beca para curso en enfermería",
      info: "Curso de enfermería en Valencia",
      imageURL: "https://www.viveusa.mx/sites/default/files/field/image/enfermeras.jpg",
      project_type: "beca",
      foundation: found7,
      subscribers:[]

    },

    {
      _id:proj8,
      name: "Gerente de tienda",
      info: "Buscamos gerente de tienda de ropa en Barcelona",
      imageURL: "https://www.tuotrodiario.com/imagenes/noticias/2019030579774/mercadona-realiza-inversion-millonaria-uniformes/0-251-946/mercadona-ep-z.jpg",
      project_type: "trabajo",
      foundation: found8,
      subscribers:[]

    },

    {
      _id:proj9,
      name: "Beca para curso de mecánica",
      info: "Becae para curso de mecánica en Asturias",
      imageURL: "https://s3.eu-west-3.amazonaws.com/implika-pro/course_image/0001/01/thumb_136_course_image_big.jpeg",
      project_type: "beca",
      foundation: found9,
      subscribers:[]

    },

    {
      _id:proj10,
      name: "Partido de baloncesto",
      info: "Partido de baloncesto en silla de ruedas",
      imageURL: "https://files.laligasports.es/201606/1024x800_bffa85df8b29084429image.jpeg?29616105247",
      project_type: "actividad",
      foundation: found10,
      subscribers:[]

    },
  ]





User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  
    Foundation.deleteMany()
    .then(() => {
      return Foundation.create(foundations)
    })
    .then(foundationsCreated => {
      console.log(`${foundationsCreated.length} foundations created with the following id:`);
      console.log(foundationsCreated.map(u => u._id));
    })
})
.then(() => {
    Project.deleteMany()
    .then(() => {
      return Project.create(projects)
    })
    .then(projectsCreated => {
      console.log(`${projectsCreated.length} projects created with the following id:`);
      console.log(projectsCreated.map(u => u._id));
    })
})
.catch(err => {
  mongoose.disconnect()
  throw err
});


