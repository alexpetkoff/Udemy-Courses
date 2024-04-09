import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";

function AllEventsPage() {
    const events = getAllEvents();
    const router = useRouter();

    function findEventHandler(year, month) {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <>
            <EventsSearch onSearch={findEventHandler} />
            <EventList items={events} />
        </>
    );
}

export default AllEventsPage;
