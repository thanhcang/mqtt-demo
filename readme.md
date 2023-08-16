### Install mqtt broker
```bash
   docker pull ncarlier/mqtt
   docker run -d -p 1883:1883 ncarlier/mqtt:latest
   docker logs -f container-id # to view logs connection of mqtt broker
```
### Producing a message
```bash
    npm run produce
```

### Receive the messages 
```bash
    npm run listen
```