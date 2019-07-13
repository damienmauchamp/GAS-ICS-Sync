var sourceCalendarString = "BEGIN:VCALENDAR\n"+
"PRODID;X-RICAL-TZSOURCE=TZINFO:-//com.denhaven2/NONSGML ri_cal gem//EN\n"+
"CALSCALE:GREGORIAN\n"+
"VERSION:2.0\n"+
"METHOD:PUBLISH\n"+
"BEGIN:VTIMEZONE\n"+
"TZID:Europe/Berlin\n"+
"X-LIC-LOCATION:Europe/Berlin\n"+
"BEGIN:DAYLIGHT\n"+
"TZOFFSETFROM:+0100\n"+
"TZOFFSETTO:+0200\n"+
"TZNAME:CEST\n"+
"DTSTART:19700329T020000\n"+
"RRULE:FREQ=YEARLY;BYDAY=-1SU;BYMONTH=3\n"+
"END:DAYLIGHT\n"+
"BEGIN:STANDARD\n"+
"TZOFFSETFROM:+0200\n"+
"TZOFFSETTO:+0100\n"+
"TZNAME:CET\n"+
"DTSTART:19701025T030000\n"+
"RRULE:FREQ=YEARLY;BYDAY=-1SU;BYMONTH=10\n"+
"END:STANDARD\n"+
"END:VTIMEZONE\n"+
"BEGIN:VTIMEZONE\n"+
"TZID:US Mountain Standard Time\n"+
"BEGIN:STANDARD\n"+
"DTSTART:16010101T000000\n"+
"TZOFFSETFROM:-0700\n"+
"TZOFFSETTO:-0700\n"+
"END:STANDARD\n"+
"BEGIN:DAYLIGHT\n"+
"DTSTART:16010101T000000\n"+
"TZOFFSETFROM:-0700\n"+
"TZOFFSETTO:-0700\n"+
"END:DAYLIGHT\n"+
"END:VTIMEZONE\n"+
"BEGIN:VTIMEZONE\n"+
"TZID:Pacific Standard Time\n"+
"BEGIN:STANDARD\n"+
"DTSTART:16010101T020000\n"+
"TZOFFSETFROM:-0700\n"+
"TZOFFSETTO:-0800\n"+
"RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=1SU;BYMONTH=11\n"+
"END:STANDARD\n"+
"BEGIN:DAYLIGHT\n"+
"DTSTART:16010101T020000\n"+
"TZOFFSETFROM:-0800\n"+
"TZOFFSETTO:-0700\n"+
"RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=2SU;BYMONTH=3\n"+
"END:DAYLIGHT\n"+
"END:VTIMEZONE\n"+
"BEGIN:VTIMEZONE\n"+
"TZID:SA Western Standard Time\n"+
"BEGIN:STANDARD\n"+
"DTSTART:16010101T000000\n"+
"TZOFFSETFROM:-0400\n"+
"TZOFFSETTO:-0400\n"+
"END:STANDARD\n"+
"BEGIN:DAYLIGHT\n"+
"DTSTART:16010101T000000\n"+
"TZOFFSETFROM:-0400\n"+
"TZOFFSETTO:-0400\n"+
"END:DAYLIGHT\n"+
"END:VTIMEZONE\n"+
"BEGIN:VTIMEZONE\n"+
"TZID:Central Standard Time\n"+
"BEGIN:STANDARD\n"+
"DTSTART:16010101T020000\n"+
"TZOFFSETFROM:-0500\n"+
"TZOFFSETTO:-0600\n"+
"RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=1SU;BYMONTH=11\n"+
"END:STANDARD\n"+
"BEGIN:DAYLIGHT\n"+
"DTSTART:16010101T020000\n"+
"TZOFFSETFROM:-0600\n"+
"TZOFFSETTO:-0500\n"+
"RRULE:FREQ=YEARLY;INTERVAL=1;BYDAY=2SU;BYMONTH=3\n"+
"END:DAYLIGHT\n"+
"END:VTIMEZONE\n"+
"BEGIN:VEVENT\n"+
"ORGANIZER;CN='Sally Example':mailto:sally@example.com\n"+
"DTEND;TZID=Europe/Berlin:20190123T130000\n"+
"DTSTART;TZID=Europe/Berlin:20190123T123000\n"+
"DTSTAMP;VALUE=DATE-TIME:20190128T180311Z\n"+
"UID:12345\n"+
"DESCRIPTION:Test description\n"+
"SUMMARY:Test titleCST\n"+
"RRULE:FREQ=WEEKLY;BYDAY=TU,TH;UNTIL=20200109T160000Z;WKST=SU\n"+
"EXDATE;TZID=Europe/Berlin:20190613T123000,20190702T123000\n"+
"LOCATION:Main Street Sports Center\n"+
"END:VEVENT\n"+
"BEGIN:VEVENT\n"+
"ORGANIZER;CN='Sally Example':mailto:sally@example.com\n"+
"DTSTART;VALUE=DATE:20190121\n"+
"DTEND;VALUE=DATE:20190127\n"+
"DTSTAMP;VALUE=DATE-TIME:20190128T180311Z\n"+
"UID:ABCXYZ123@google.com?\n"+
"DESCRIPTION:Test description\n"+
"SUMMARY:Test titlePST\n"+
"RRULE:FREQ=WEEKLY;BYDAY=TU,TH;UNTIL=20200109T160000Z;WKST=SU\n"+
"LOCATION:Main Street Sports Center\n"+
"END:VEVENT\n"+
"END:VCALENDAR";