import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/event-detail/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/event-detail/error-alert";

function FilteredEventsPage() {
    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) {
        return <p className="center">Loading</p>;
    }

    const filteredYear = Number(filterData[0]);
    const filteredMonth = Number(filterData[1]);

    if (
        isNaN(filteredYear) ||
        isNaN(filteredMonth) ||
        filteredYear > 2022 ||
        filteredYear < 2021 ||
        filteredMonth < 1 ||
        filteredMonth > 12
    ) {
        return (
            <>
                <ErrorAlert>
                    <p className="center">
                        Invalid filter, please adjust your values!
                    </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show all events</Button>
                </div>
            </>
        );
    }

    const filteredEvents = getFilteredEvents({
        year: filteredYear,
        month: filteredMonth,
    });

    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <>
                <ErrorAlert>
                    <p className="center">
                        No events found for the chosen filters!
                    </p>
                </ErrorAlert>
                <div className="center">
                    <Button link="/events">Show all events</Button>
                </div>
            </>
        );
    }

    const date = new Date(filteredYear, filteredMonth - 1);

    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    );
}

export default FilteredEventsPage;
