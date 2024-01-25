const uuid = require('uuid')
const path = require('path');
const { Glav_text, Kategorii,O_sebe, O_sebe_info, Uslugi, Uslugi_price, Komplex_predl, Komplex_predl_info, Komplex_predl_info_desc, Actii, Actii_info, Otzivi, Otzivi_info, Vizit, Sertificats, Sertificats_info, Kontacts, Kontacts_phone } = require('../models/models')
const ApiError = require('../error/ApiError');

class deviceController {

    async create(req, res, next) {


        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    

    async putGlav_text (req, res) {
        const id = 3
        
        const {video} = req.files
        let fileName = uuid.v4() + ".mp4"
        video.mv(path.resolve(__dirname, '..', 'static', fileName))


        const basket =  await Glav_text.update(
        {
            text1: req.body.text1,
            text2:req.body.text2,
            video:fileName,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }



    async putGlav_text1 (req, res) {
        const id = 3

        const basket =  await Glav_text.update(
        {
            text1: req.body.text1,
            text2:req.body.text2,
     
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }


    async getGlav_text(req, res) {
        const {id} = req.params
        const Glav_text1 = await Glav_text.findAll(
         
        )
        return res.json(Glav_text1)
    }

    async createGlav_text(req, res) {
        const {video,text1,text2} = req.body
        
            const {video1} = req.files
            let fileName = uuid.v4() + ".mp4"
            video1.mv(path.resolve(__dirname, '..', 'static', fileName))
    
        const basketDevice = await Glav_text.create({video:fileName,text1,text2})
        return res.json(basketDevice)
    }


    async createKategorii(req, res) {
        const {svg,title,description} = req.body
        
            const {svg1} = req.files
            let fileName = uuid.v4() + ".svg"
            svg1.mv(path.resolve(__dirname, '..', 'static', fileName))
    
        const basketDevice = await Kategorii.create({svg:fileName,title,description})
        return res.json(basketDevice)
    }
    async delKategorii(req, res) {
        try {
          const { id } = req.params;
      
          const deletedProduct = await Kategorii.destroy({
            where: { id: id },
          });
      
          if (deletedProduct) {
            return res.status(204).send('Product deleted successfully ');
          }
      
          throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };

    async putKategorii (req, res) {
    

        const {svg} = req.files
        let fileName = uuid.v4() + ".svg"
        svg.mv(path.resolve(__dirname, '..', 'static', fileName))


        const basket =  await Kategorii.update(
        {
            svg: fileName,
            title:req.body.title,
            description:req.body.description,
        },
        {
            where :{id:req.body.id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }

    
    async putKategorii1 (req, res) {
    

        const basket =  await Kategorii.update(
        {
            title:req.body.title,
            description:req.body.description,
        },
        {
            where :{id:req.body.id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }

    async getKategorii(req, res) {
        const {id} = req.params
        const kategorii = await Kategorii.findAll(
      
        )
        return res.json(kategorii)
    }






    async putO_sebe (req, res) {
   
        const id = 1

        const {img} = req.files
        let fileName = uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const basket =  await O_sebe.update(
            
        {
            img: fileName,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }

    async getO_sebe(req, res) {
        const {id} = req.params
        const kategorii = await O_sebe.findAll(
            {
                where :{id}
            }   
        )
        return res.json(kategorii)
    }
    async putO_sebe_info (req, res) {
        const {id} = req.params
        const basket =  await O_sebe_info.update(
        {
       
            title:req.body.title,
            description:req.body.description,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getO_sebe_info (req, res) {
        const {id} = req.params
        const kategorii = await O_sebe_info.findAll(
            {
                where :{oSebeId:id}
            }   
        )
        return res.json(kategorii)
    }

    async creategetO_sebe_info(req, res) {
        const {title,description,oSebeId} = req.body
        const basketDevice = await O_sebe_info.create({title,description,oSebeId})
        return res.json(basketDevice)
    }
    async delO_sebe_info(req, res) {
        try {
          const { id } = req.params;
      
          const deletedProduct = await O_sebe_info.destroy({
            where: { id: id },
          });
      
          if (deletedProduct) {
            return res.status(204).send('Product deleted successfully ');
          }
      
          throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };




    async putUslugi (req, res) {
        const id = req.body.id

        const {svg} = req.files
        let fileName = uuid.v4() + ".svg"
        svg.mv(path.resolve(__dirname, '..', 'static', fileName))

        const basket =  await Uslugi.update(
        {
            svg:fileName,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async putUslugi2 (req, res) {
        const id = req.body.id

        const {img} = req.files
        let fileName = uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const basket =  await Uslugi.update(
        {
            img:fileName,
            name:req.body.name,
            description:req.body.description,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }


    async putUslugi3 (req, res) {
        const id = req.body.id

        const basket =  await Uslugi.update(
        {
            name:req.body.name,
            description:req.body.description,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }


    async getUslugi (req, res) {
 
        const kategorii = await Uslugi.findAll()
        return res.json(kategorii)
    }
    async createUslugi(req, res) {
        const {svg,name,description} = req.body

        
            const {svg1} = req.files
            let fileName = uuid.v4() + ".svg"
            svg1.mv(path.resolve(__dirname, '..', 'static', fileName))


        const basketDevice = await Uslugi.create({svg:fileName,name,description})
        return res.json(basketDevice)
    }


    async delUslugi(req, res) {
        try {
          const { id } = req.params;
      
          const deletedProduct = await Uslugi.destroy({
            where: { id: id },
          });
      
          if (deletedProduct) {
            return res.status(204).send('Product deleted successfully ');
          }
      
          throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };
    async putUslugi_price (req, res) {
        const id = req.body.id
        const basket =  await Uslugi_price.update(
        {
       
           name:req.body.name,
            price:req.body.price,

        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getUslugi_price (req, res) {
        const {id} = req.params
        const kategorii = await Uslugi_price.findAll(
            {
                
                where :
                {
                    uslugiId:id
                }
            }   
        )
        return res.json(kategorii)
    }
    async createUslugi_price(req, res) {
        const { name,price,uslugiId,UslugiPriceId} = req.body
        const basketDevice = await Uslugi_price.create({name,price,uslugiId,UslugiPriceId})
        return res.json(basketDevice)
    }
    async delUslugi_price(req, res) {
        try {
          const { id } = req.params;
      
          const deletedProduct = await Uslugi_price.destroy({
            where: { id: id },
          });
      
          if (deletedProduct) {
            return res.status(204).send('Product deleted successfully ');
          }
      
          throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };





    async putKomplex_predl (req, res) {
        const {id} = req.params
        const basket =  await Komplex_predl.update(
        {
           name:req.body.name,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getKomplex_predl (req, res) {
        const {id} = req.params
        const kategorii = await Komplex_predl.findAll(
            {
                
           
            }   
        )
        return res.json(kategorii)
    }

    async putKomplex_predl_info (req, res) {
        const id = req.body.id

        
        const {img} = req.files
        let fileName = uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const basket =  await Komplex_predl_info.update(
        {
           img:fileName,
           name2: req.body.name2,
           title2: req.body.title2,
         
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }


    async putKomplex_predl_info1 (req, res) {
        const id = req.body.id

        const basket =  await Komplex_predl_info.update(
        {
           name2: req.body.name2,
           title2: req.body.title2,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }

    async getKomplex_predl_info (req, res) {
        const {id} = req.params
        const kategorii = await Komplex_predl_info.findAll(
          
        )
        return res.json(kategorii)
    }
    async createKomplex_predl_info(req, res) {
        const {name} = req.body
        const basketDevice = await Komplex_predl_info.create({name})
        return res.json(basketDevice)
    }

    async delKomplex_predl_info(req, res) {
        try {
          const { id } = req.params;
      
          const deletedProduct = await Komplex_predl_info.destroy({
            where: { id: id },
          });
      
          if (deletedProduct) {
            return res.status(204).send('Product deleted successfully ');
          }
      
          throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };
    async putKomplex_predl_info_desc (req, res) {
        const id = req.body.id
        const basket =  await Komplex_predl_info_desc.update(
        {
            description:req.body.description,
            title:req.body.title,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getKomplex_predl_info_desc (req, res) {
        const {id} = req.params
        const kategorii = await Komplex_predl_info_desc.findAll(
            {
                
                where :
                {
                    komplexPredlInfoId: id
                }
            }   
        )
        return res.json(kategorii)
    }
    async createKomplex_predl_info_desc(req, res) {
        const {description,komplexPredlInfoId} = req.body
        const basketDevice = await Komplex_predl_info_desc.create({description,komplexPredlInfoId})
        return res.json(basketDevice)
    }
  async delKomplex_predl_info_desc(req, res) {
        try {
          const { id } = req.params;
      
          const deletedProduct = await Komplex_predl_info_desc.destroy({
            where: { id: id },
          });
      
          if (deletedProduct) {
            return res.status(204).send('Product deleted successfully ');
          }
      
          throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };







    async putActii (req, res) {
        const {id} = req.params
        const basket =  await Actii.update(
        {
            name:req.body.name,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getActii (req, res) {
        const {id} = req.params
        const kategorii = await Actii.findAll(
            {
                
                where :
                {
                     id
                }
            }   
        )
        return res.json(kategorii)
    }

    async putActii_info (req, res) {
        const id = req.body.id
        const basket =  await Actii_info.update(
        {
            name:req.body.name,
            description:req.body.description,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    
    async putActii_img (req, res) {
        const id = 1

        const {img} = req.files
        let fileName = uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const basket =  await Actii.update(
        {
            img:fileName,

        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getActii_info (req, res) {
        const {id} = req.params
        const kategorii = await Actii_info.findAll(
            {
                
                where :
                {
                    actiiId: id
                }
            }   
        )
        return res.json(kategorii)
    }

    async createActii_info(req, res) {
        const {name,description,actiiId} = req.body
        const basketDevice = await Actii_info.create({name,description,actiiId})
        return res.json(basketDevice)
    }

    async delActii_info(req, res) {
        try {
          const { id } = req.params;
      
          const deletedProduct = await Actii_info.destroy({
            where: { id: id },
          });
      
          if (deletedProduct) {
            return res.status(204).send('Product deleted successfully ');
          }
      
          throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };




    async putOtzivi (req, res) {
        const {id} = req.params
        const basket =  await Otzivi.update(
        {
            name:req.body.name,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getOtzivi (req, res) {
        const {id} = req.params
        const kategorii = await Otzivi.findAll(
            {
                
                where :
                {
                     id
                }
            }   
        )
        return res.json(kategorii)
    }
    async putOtzivi_info (req, res) {
        const id = req.body.id

        const {img} = req.files
        let fileName = uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))


        const basket =  await Otzivi_info.update(
        {
            img:fileName,
            name:req.body.name,
            star:req.body.star,
            description:req.body.description,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async putOtzivi_info1 (req, res) {
        const id = req.body.id
        const basket =  await Otzivi_info.update(
        {
            name:req.body.name,
            star:req.body.star,
            description:req.body.description,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }


    async getOtzivi_info (req, res) {
        const {id} = req.params
        const kategorii = await Otzivi_info.findAll(
            {
                
                where :
                {
                    otziviId: id
                }
            }   
        )
        return res.json(kategorii)
    }
    async createOtzivi_info(req, res) {
        const {name,description,actiiId} = req.body
        const basketDevice = await Otzivi_info.create({name,description,actiiId})
        return res.json(basketDevice)
    }
    async delOtzivi_info(req, res) {
        try {
          const { id } = req.params;
      
          const deletedProduct = await Otzivi_info.destroy({
            where: { id: id },
          });
      
          if (deletedProduct) {
            return res.status(204).send('Product deleted successfully ');
          }
      
          throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };







    async putVizit (req, res) {
        const id = 1

        const {img} = req.files
        let fileName = uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const basket =  await Vizit.update(
        {
            img:fileName,
            description:req.body.description,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async putVizit1 (req, res) {
        const id = 1

        const basket =  await Vizit.update(
        {

            description:req.body.description,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getVizit (req, res) {
        const {id} = req.params
        const kategorii = await Vizit.findAll(
            {
                
                where :
                {
                     id
                }
            }   
        )
        return res.json(kategorii)
    }













    async putSertificats(req, res) {
        const {id} = req.params
        const basket =  await  Sertificats.update(
        {
            name:req.body.name,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getSertificats (req, res) {
        const {id} = req.params
        const kategorii = await Sertificats.findAll(
            {
                
                where :
                {
                     id
                }
            }   
        )
        return res.json(kategorii)
    }

    async putSertificats_info (req, res) {
        const id = req.body.id

        const {img} = req.files
        let fileName = uuid.v4() + ".png"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const basket =  await Sertificats_info.update(
        {
            img:fileName,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getSertificats_info (req, res) {
        const {id} = req.params
        const kategorii = await Sertificats_info.findAll(
            {
                
                where :
                {
                    sertificatId: id
                }
            }   
        )
        return res.json(kategorii)
    }

    async createSertificats_info(req, res) {
        const {img,sertificatId} = req.body
        const basketDevice = await Sertificats_info.create({img,sertificatId})
        return res.json(basketDevice)
    }

    async delSertificats_info(req, res) {
        try {
          const { id } = req.params;
      
          const deletedProduct = await Sertificats_info.destroy({
            where: { id: id },
          });
      
          if (deletedProduct) {
            return res.status(204).send('Product deleted successfully ');
          }
      
          throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };




    async putKontacts(req, res) {
        const {id} = req.params
        const basket =  await  Kontacts.update(
        {
            name:req.body.name,
            uslugi:req.body.uslugi,
        },
        {
            where :{id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getKontacts (req, res) {
        const {id} = req.params
        const kategorii = await Kontacts.findAll(
            {
                
                where :
                {
                     id
                }
            }   
        )
        return res.json(kategorii)
    }
    async putKontacts_phone (req, res) {
        const {id} = req.params
        const basket =  await Kontacts_phone.update(
        {
            phone:req.body.phone,
        },
        {
            where :{komplexPredlId:id}
        }
        )
        if (basket) {
            return res.status(206).send('Basket updated successfully ');
          }throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
    }
    async getKontacts_phone (req, res) {
        const {id} = req.params
        const kategorii = await Kontacts_phone.findAll(
            // {
                
            //     where :
            //     {
            //         komplexPredlId: id
            //     }
            // }   
        )
        return res.json(kategorii)
    }
    async createKontacts_phone(req, res) {
        const {phone,kontactId} = req.body
        const basketDevice = await Kontacts_phone.create({phone,kontactId})
        return res.json(basketDevice)
    }
    async delKontacts_phone(req, res) {
        try {
          const { id } = req.params;
      
          const deletedProduct = await Kontacts_phone.destroy({
            where: { id: id },
          });
      
          if (deletedProduct) {
            return res.status(204).send('Product deleted successfully ');
          }
      
          throw new Error('Product not found');
        } catch (error) {
          return res.status(500).send(error.message);
        }
      };








    async create(req, res, next) {
        try {
            let {name, price, typeId, info,description} = req.body


            const device = await Device.create({name,price ,typeId,description});

    
            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }




    
}

module.exports = new deviceController()