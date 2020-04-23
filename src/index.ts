import * as express from 'express';
import { Request, Response, Application } from 'express';
import { database } from './lib/database';
import {User} from './app/models/user';
import {Group} from './app/models/group';
import * as userController from './app/controllers/user'
import * as groupController from './app/controllers/group'

const app: Application = express();
app.use(express.json())
const { PORT = 3000 } = process.env;


app.get('/', async (req: Request, res: Response) => {
  res.json({
    message: 'hello world',
  });
});


/*************USERS*************/

//index
app.get('/user', userController.index);

//show
app.get('/user/:id', userController.show);

//create
app.post('/user', userController.create);

//update
app.put('/user/:id', userController.update);

//delete
app.delete('/user/:id', userController.destroy);


/*************GROUPS*************/

//index
app.get('/group', groupController.index);

//show
app.get('/group/:id', groupController.show);

//create
app.post('/group', groupController.create);

//update
app.put('/group/:id', groupController.update);

//delete
app.delete('/group/:id', groupController.destroy);


app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
