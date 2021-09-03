CONTINUOUS INTEGRATION

TeamCity by JetBrains

    FEATURE: Remote run and pre-tested commit.
        Because this is a JetBrains product, if you integrate this CI service with your JetBrains IDE you can build, check, and run automated tests without creating any branches or committing any code.

    PROCESS: Easy to use site with clear options for downloading TeamCity 

        https://www.jetbrains.com/teamcity/?source=google&medium=cpc&campaign=12698665915&gclid=CjwKCAjwj8eJBhA5EiwAg3z0m4Sm4A1rsNsZ8ZA-9BHjJETEJmxl-AUVUjr8LmLlB8CM6XBg-FL2ExoC9KoQAvD_BwE

        Roadmap tab provides a extensive yet light rundown of the features and the processes of the different versions broad strokes download and setup directions

        https://www.jetbrains.com/teamcity/roadmap/

        Learn tab contains tutorials and documentation, the documentation is extensive but appears to have everything necessary to getting set up and using TeamCity on a developer/dev-ops level, as well as it is also well organized. The tutorials are incredibly well put together with images and clear instructions for anyone who is new to the product or continuous integration in general.

        https://www.jetbrains.com/help/teamcity/teamcity-documentation.html

    ABOUT: TeamCity is regularly maintained by a large and incredibly successful company in JetBrains, with updates occuring roughly every 6 months. TeamCity was originally released in 2006 and was most recently updated in May of 2021. The product recieves good ratings and appears to be a viable options especially for companies that utilize the JetBrains portfolio.


REAL TIME ERROR MONITORING

bugsnag by SMARTBEAR

    FEATURE: bugsnag is a real time error monitoring product. 
        It has had real success in the mobile development work for increasing stability, They argue the importance of product stability management along with application performance and provide recources with this goal in mind.

    PROCESS: bugsnags recources page provides an overview of the product features as well as guides and infographics assisting new users to find the information the need to decide if bugsnag is right for them

        https://www.bugsnag.com/resources

        The guids are somewhat scattered and it may take some time to find relevant information pertaining to your issue or getting started but there does seem to be a lot of recources and the bugsnag assistant chat bot could probably come in handy if you were looking for something specific.

        https://www.bugsnag.com/resources/guides

        On the other hand the actual documentation seems incredibly clerarly and provides specific instructions for getting started with whatever system and language you are using from React Native to JavaScript to macOS you can get specific instructions for your project and implement bugsnag quickly and (hopefully) painlessly.

        https://docs.bugsnag.com/

    ABOUT: Bugsnag was founded in 2013 in San Fransisco and has monitored over 1 trillion application sessions, these include sessions for companies the likes of Airbnb, Lyft, Pandora, Shopify, and Square. The company is currently active and is updating the product regularly. The product is reviewed well and seems to be an excellent option especially if you prioritize stability and stability management in your project.

RUNTIME.JS

    the append takes a fraction of the time the insert takes, most likely due to the fact that the insert has to reassign the indecies of every single item in the array. it should always be faster to push to the end no matter the size of the array.

    Results     |   extraLargeArray     |   largeArray      |   mediumArray     |   smallArray      |   tinyArray       
    --------------------------------------------------------------------------------------------------------------------
    insert      |   973.660146 ms       |   6.730739 ms     |   1.287419 ms     |   9.445 μs        |   2.357 μs
    append      |   4.394539 ms         |   794.614 μs      |   360.281 μs      |   7.856 μs        |   2.534 μs

    What is very interesting to me is in the tiny array the append function was slower than the insert function. However it is microscoptic and it is very clear that the append function and more specifically the .push() array method scales way better than an insert (.unshift()) function, this follows with my prediction that the need to alter the indecies of each array item is incredibly time intensive and should realistically be avoided if at all possible.

