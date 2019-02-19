import React, { Component } from "react";

class App extends Component {
  render() {
    var obj = {
      _id: {
        $oid: "5c1e2c68040f2902b603cb23"
      },
      equipo: [
        {
          nombre: "Javier",
          apellido: "Buendia",
          cargo: "fisioterapeuta",
          textoPersona:
            "bla bla bla, bla lkwoqio oeoi dkn sn lkadknaq askdnak, lwohla ls siew  qoiew.\n              Y seguimos un poco mas con el bla bla bla de de la persona lkwx xljpo oapidfpo poaisd, fuosid uosdif oi odsifusoi usoi oispufaif.\n              Ya vamos acabando.",
          urlPic:
            "https://firebasestorage.googleapis.com/v0/b/fisiob-f5aca.appspot.com/o/carousel%2FAcronis%202018-12-13%2012-01-29.png?alt=media&token=870fa3f9-cab2-4648-8b7a-b37bc9d0fd44",
          formacion: [
            {
              estudios: "fisioterapia",
              centroFormativo: "Universidad AlfonsoX el sabio",
              centroUrlPic:
                "https://firebasestorage.googleapis.com/v0/b/fisiob-f5aca.appspot.com/o/carousel%2FBackup%20Solution%20%7C%20Carbonite%202018-12-13%2011-06-40.png?alt=media&token=eec615f1-21c5-4d6b-a7cb-5d439dcdad3f",
              centroUrl: "https://www.uax.es/grado-en-fisioterapia.html",
              fecha: 2002
            },
            {
              estudios: "Ostiopatia",
              centroFormativo: "Universidad de Alcalá de Henares ",
              centroUrlPic:
                "https://firebasestorage.googleapis.com/v0/b/fisiob-f5aca.appspot.com/o/carousel%2FLogoRamiro.jpg?alt=media&token=392104f1-890c-4827-b26d-7545037f4c2e",
              centroUrl:
                "https://mongoosejs.com/docs/4.x/docs/api.html#schema-date-js",
              fecha: "2007"
            }
          ],
          tecnicas: [
            {
              nombre: "fisioterapia deportiva",
              id: "fisioterapia"
            },
            {
              nombre: "kinesiología",
              id: "osteopatia"
            },
            {
              nombre: "Radiología e Imagen Biomédica",
              id: "fisioterapia"
            },
            {
              nombre: "Pilates aplicado a la fisioterapia",
              id: "pilates"
            },
            {
              nombre: "vendaje neuromuscular",
              id: "fisioterapia"
            },
            {
              nombre: "control motor cervical",
              id: "osteopatia"
            }
          ]
        },
        {
          nombre: "Steffany",
          apellido: "Do Santos",
          cargo: "Podologa",
          textoPersona:
            "bla bla bla, bla lkwoqio oeoi dkn sn lkadknaq askdnak, lwohla ls siew  qoiew. Glsp ;lkwo iOIu poisuv poiuasoiudf poisuadpoiu aos iud oiau poiu poi upo iu opiu osdufopisudofiu oidu oi uo iudfopi u osi.\n              Peld dlsi jso oisdj o sido idfiso doifj dsf.",
          urlPic:
            "https://firebasestorage.googleapis.com/v0/b/fisiob-f5aca.appspot.com/o/carousel%2FBackup%20Solution%20%7C%20Carbonite%202018-12-13%2011-06-40.png?alt=media&token=4bb56b4b-02f2-4277-9921-8f1635d762c6",
          formacion: [
            {
              estudios: "podología",
              centroFormativo: "universidad de A Coruña",
              centroUrlPic:
                "https://firebasestorage.googleapis.com/v0/b/fisiob-f5aca.appspot.com/o/carousel%2FBackup%20Solution%20%7C%20Carbonite%202018-12-13%2011-06-40.png?alt=media&token=44489592-40ee-4fe9-ba06-6186d0318193",
              centroUrl:
                "https://mongoosejs.com/docs/4.x/docs/api.html#schema-date-js",
              fecha: "2011"
            },
            {
              estudios: "Patología y ortopedia del miembro inferior",
              centroFormativo: "Complutense de Madrid Universidad",
              centroUrlPic:
                "https://firebasestorage.googleapis.com/v0/b/fisiob-f5aca.appspot.com/o/carousel%2FAcronis%202018-12-13%2012-01-29.png?alt=media&token=0a9ebd2a-7c4d-4af9-bdca-5b67f23e07cd",
              centroUrl:
                "https://mongoosejs.com/docs/4.x/docs/api.html#schema-date-js",
              fecha: "2007"
            }
          ],
          tecnicas: [
            {
              nombre: "estudios de biomecanica",
              id: "podologia"
            },
            {
              nombre: "analisis en la pisada",
              id: "podologia"
            },
            {
              nombre: "pié diabético",
              id: "podologia"
            },
            {
              nombre: "protesis de la planta del pie",
              id: "podologia"
            },
            {
              nombre: "podologia en la tercera edad",
              id: "podologia"
            }
          ],
          undefined: "estudios biomecanicos"
        }
      ],
      equipoTextoLargo:
        "Papolosky Nasdarovia bla bla bla lskjwopobz oxbzpoxiasd vaspodivs osiv o sdviopsvopsdv osd.\n        poxcivoxivapoij vapoisdjv poivjsdovi jsodiv sdpoivj sd jpaoijvposdij vasoj asdvioasoijsdvpoijsdv poiasdj oiaj bla bla bla.\n        lxjosj vkjsoijfwpoei uapoiuwerpo oqwieufoiweupweapdif oisadf pou pi iaoisuf ioaweuf oaieuf paoiudf poaiweuf poaiweufosivujoijavaopi asoivmasdoimasodiv mas asoivm aoim aoisdm aoi maois maosim vasoivm apoivm asiovm aopisdmv pdimv aopidmv poaidmv ma.\n        bla bla bla bla bla!",
      __v: 0
    };
    let arrayfromObj = Object.keys(obj).map(key => {
      return {
        [key]: obj[key]
      };
    });
    console.log(arrayfromObj);
    return (
      <div>
        <div>
          <h1 className="header_container">Hellos SaS world</h1>
          <p className="paragraph_container">
            {" "}
            yes this is a brand new app to practice and use SASS more in depth
          </p>
          {obj.equipo.map((persona, index) => {
            return (
              <div key={index}>
                <h3>{persona.nombre}</h3>
                <img src={persona.urlPic} alt="foto" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
