def solar_system(planets, moons):
    planet_moons = {
        'Mercury': [],
        'Venus': [],
        'Earth': ['Moon'],
        'Mars': ['Deimos', 'Phobos'],
        'Jupiter': ['Callisto', 'Europa', 'Ganymede', 'Io'],
        'Saturn': ['Dione', 'Iapetus', 'Rhea', 'Tethys', 'Titan'],
        'Uranus': ['Ariel', 'Miranda', 'Oberon', 'Titania', 'Umbriel'],
        'Neptune': ['Nereid', 'Proteus', 'Triton']
    }

    # Sort moons alphabetically
    moons.sort()

    # Create result list
    result = [[planet] + [moon for moon in moons if moon in planet_moons[planet]] for planet in planets]

    return result

# Example usage
planets_list = ["Venus", "Neptune", "Jupiter", "Earth", "Mars"]
moons_list = ["Proteus", "Rhea", "Io", "Moon", "Nereid", "Triton", "Phobos"]

print(solar_system(planets_list, moons_list))
