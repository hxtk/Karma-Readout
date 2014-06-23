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

    y = (100-p)n / (2p-100)
    x = n+y
    
