# API Documentation

## GET /api/data

Returns sample monitoring data for the Rideau Canal dashboard.

### Response Example

```json
[
  {
    "location": "Dow's Lake",
    "iceThickness": 31,
    "surfaceTemp": -4,
    "snowAccumulation": 3,
    "externalTemp": -8,
    "status": "Safe"
  },
  {
    "location": "Fifth Avenue",
    "iceThickness": 27,
    "surfaceTemp": -1,
    "snowAccumulation": 5,
    "externalTemp": -6,
    "status": "Caution"
  },
  {
    "location": "NAC",
    "iceThickness": 22,
    "surfaceTemp": 1,
    "snowAccumulation": 7,
    "externalTemp": -3,
    "status": "Unsafe"
  }
]
