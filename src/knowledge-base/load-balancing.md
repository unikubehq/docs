# Load balancing

Load balancing is the process of distributing requests or calculations among different systems working in parallel.

If a website, such as an online shop, is used simultaneously by millions of users to place an order, this system will receive millions of requests that it must process simultaneously. To counteract a collapse of the system, there is load balancing. Here, the load on the individual servers is assessed and the performance is increased by redistributing the requests and making them more efficient overall.

The aim of load balancing is to increase performance, minimise error rates and not lose all data at the same time in the event of a possible hardware failure.

A load balancer can be hardware-based or software-based.

There are various methods for load balancing, most of which are interrelated. Some of the most common load balancing methods or strategies are:

-   DNS method: multiple IP addresses are stored for a host name; each IP address is assigned to a separate server.
    
-   Round-robin method: in the rotation method, the servers are checked one after the other for their load and the first "free" server receives the request.
    
-   NAT variant (Network Address Translation): if a server is overloaded, the load balancer determines another server to which it can assign new requests.
    
-   IP hash: the IP address of the client determines which server receives the request.
    
-   Least connections: the method routes the traffic to the server with the fewest connections.
    
-   Least response time: this method uses the response time as an indicator of the server's load.
    
-   Least bandwidth: this method selects the server that has the least data traffic (Mbit/s) at that time.
