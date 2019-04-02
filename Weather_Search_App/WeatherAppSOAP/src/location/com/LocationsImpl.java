package location.com;

import javax.jws.WebService;
import java.util.HashMap;
import java.util.Map;

@WebService(endpointInterface = "location.com.Locations")

public class LocationsImpl implements Locations {

    private static Map<String, Location> locations = new HashMap<>();

    @Override
    public Location findCoordinates(String name) {

        return locations.get(name);
    }

    public void init()
    {
        Location denmark = new Location();
        denmark.setName("Copenhagen");
        denmark.setLat(55.676097);
        denmark.setLon(12.568337);
        locations.put(denmark.getName(), denmark);

        Location poland = new Location();
        poland.setName("Warsaw");
        poland.setLat(52.229676);
        poland.setLon(21.012229);
        locations.put(poland.getName(), poland);

        Location uk = new Location();
        uk.setName("London");
        uk.setLat(51.507351);
        uk.setLon(-0.127758);
        locations.put(uk.getName(), uk);

        Location jp = new Location();
        jp.setName("Shuzenji");
        jp.setLat(35);
        jp.setLon(139);
        locations.put(jp.getName(), jp);
    }
}
