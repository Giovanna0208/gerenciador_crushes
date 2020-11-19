import model from './model';

export default class Controller{

    constructor(){}

    //select
    getCrushs(){
        return model.find({})
    }

    select(req, res){
        this.getCrushs()
        .then(crushs => res.status(200).json({"result": crushs}))
        .catch(error => res.status(400).json({"result": error}))
    }

    //selectById
    getCrushsById(id){
        return model.find(id);
    }
    
    selectById(req, res){
        const id = {_id: req.params.id}

        this.getCrushsById(id)
        .then(crushs => res.status(200).json({"result": crushs}))
        .catch(error => res.status(400).json({"result": error}))
    }

    //delete
    deleteById(id){
        return model.deleteOne(id);
    }
    
    delete(req, res){
        const id = {_id: req.params.id}

        this.deleteById(id)
        .then(crushs => res.status(200).json({"result": crushs}))
        .catch(error => res.status(400).json({"result": error}))
    }

    //update
    updateCrush(id, data){
        return model.findOneAndUpdate(id, data);
    }
    
    update(req, res){
        const id = {_id: req.params.id}
        const crush = req.body;

        this.updateCrush(id, crush)
        .then(crushs => res.status(200).json({"result": crushs}))
        .catch(error => res.status(400).json({"result": error}))
    }

    //insert
    createCrush(data){
        return model.create(data);
    }
    
    insert(req, res){
        const crush = req.body;

        this.createCrush(crush)
        .then(crushs => res.status(200).json({"result": crushs}))
        .catch(error => res.status(400).json({"result": error}))
    }
}