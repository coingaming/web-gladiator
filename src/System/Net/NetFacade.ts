export class NetFacade  {
    static instance: NetFacade;
    _adapter;
    static getInstance() {
        if (!this.instance) {
            this.instance = new NetFacade();
            //this.instance._adapter = new SocketIOAdapter();
            // ... any one time initialization goes here ...
        }
        return this.instance;
    }
    use(adapter){
        this._adapter = adapter;
    }
    getStream(){
        return this._adapter.getStream();
    }
    connect(){
        this._adapter.connect();
    }
    send(data){
        this._adapter.send(data);
    }
    
}