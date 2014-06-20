Karma-Readout
=============

Returns upvote/downvote readout to Reddit (posts only)

-----

### Formulas

    x = upvotes
    y = downvotes
    p = percent upvoted
    n = score
    
    x = n+y
    x/(x+y) = p/100
    
    (n+y)/(n+2y) = p/100
    (100-p)n = (2p-101)y
    
    y = (100-p)n / (2p-101)
    x = n+y
    
