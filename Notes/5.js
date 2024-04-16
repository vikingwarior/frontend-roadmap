/*
    Monolith vs Microservices:

    Monolith:
    ----------
    A monolithic application is built as a single, unified unit with one code base that couples all of the business concerns together.

    To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface.

    Monoliths can be convenient early on in a project’s life for ease of code management, cognitive overhead, and deployment.

    Advantages include easy deployment, faster development speed due to the simplicity of having an application based on one code base, and potentially better performance.

    Microservices:
    ---------------
    A microservices architecture is a collection of smaller, independently deployable services.

    Each microservice handles a small portion of the functionality and data by communicating with each other directly using lightweight protocols like HTTP.

    Netflix is a high-profile example of a company that successfully migrated from a monolith to a cloud-based microservices architecture.
    
    Today, Netflix has more than a thousand microservices that manage and support separate parts of the platform, while its engineers deploy code frequently, sometimes thousands of times each day.

*/