package location.com;

import javax.xml.ws.Endpoint;

public class LocationsPublish {
    public static void main(String[] args) {
        LocationsImpl locationsRep = new LocationsImpl();
        locationsRep.init();
        Endpoint ep = Endpoint.create(locationsRep);
        ep.publish("http://127.0.0.1:7000/locationsServer");
        System.out.println("Server is listening on port 7000");
    }
}
