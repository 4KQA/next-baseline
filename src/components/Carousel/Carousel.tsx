import { FavoriteEmptyIcon } from "@assets/icons/FavoriteEmpty"
import { FavoriteFilledIcon } from "@assets/icons/FavoriteFilled"
import { LogoIcon } from "@assets/icons/Logo"
import { Button, Text } from "@chakra-ui/react"
import Carousel from "framer-motion-carousel"
import Link from "next/link"
import { useState, useEffect } from "react"

export function CarouselContainer () {
  // Move personalisation logic to its own component
  const [isFavorite, setIsFavorite] = useState(false)
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const [articles, setArticles] = useState([])

  useEffect(() => {
    const handleFetch = () => {
      fetch(
        "https://b41a37b4-2c62-48d7-a226-2c9c8db341ad.mock.pstmn.io/articlesTest55",
      )
        .then((response) => response.json())
        .then((data) => setArticles(data))
    }
    handleFetch()
  }, [])

  return (
    <div
      style={{
        width: "100vw",
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Carousel loop={true} autoPlay={true} interval={60000}>
        {articles?.length !== 0 &&
          articles.map((item, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: item.color,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "white",
                  padding: "100px",
                }}
              >
                <LogoIcon width="5vw" height="100%" />
                <br />
                <Text fontSize="xl" fontWeight={100}>
                  {item.title}
                </Text>
                <Text fontSize="l" fontWeight={100}>
                  {item.subtitle}
                </Text>
                <Link
                  key={item.slug}
                  href={`/articles/${encodeURIComponent(item.slug)}`}
                >
                  <a
                    style={{
                      paddingTop: "50px",
                      textDecoration: "underline",
                    }}
                  >
                    Show me the life in <b>{item.color}</b>
                  </a>
                </Link>

                <Button
                  style={{
                    position: "absolute",
                    bottom: "15px",
                    right: "15px",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "transparent",
                    padding: "0",
                    fontSize: "inital",
                  }}
                  onClick={() => toggleFavorite()}
                >
                  {isFavorite
                    ? (
                    <FavoriteFilledIcon width="100%" height="100%" />
                      )
                    : (
                    <FavoriteEmptyIcon width="100%" height="100%" />
                      )}
                </Button>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  )
}
