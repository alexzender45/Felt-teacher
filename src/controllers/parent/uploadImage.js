
import dotenv from 'dotenv';
import { BaseController } from '.';
import Parent from '../../model/parent.model';
const cloud = require("../../server/cloudinaryConfig");
const ObjectId = require('mongodb').ObjectID;
dotenv.config();

export class UploadImage extends BaseController {
    constructor() {
      super();
    }

    async uploadPicture(req, res){
        const user = await Parent.findById(req.params._id);
      if (!user) {
        return res.status(400).send({ error: 'User does not exist' });
      } 
      let attempt = {
        imageName: req.files[0].originalname,
        imageUrl: req.files[0].path,
      };
        cloud.uploads(attempt.imageUrl).then((result) => {
          const view = result.url;
          Parent.updateOne({ "_id":ObjectId(user._id)},
      { $set: { "image": view, "link":`http://localhost:6060/api/parents/${user._id}` } }, function (err) {
        return err;
      })
            return res.status(200).json({
              user
             });
        })
    } catch (e) {
      
      super.error(res, e);
    }
}

