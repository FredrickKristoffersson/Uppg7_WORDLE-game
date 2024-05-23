export async function renderHBS(res, page) {
  const MenuItems = [
    { page: "WORDLE", url: "/" },
    { page: "ABOUT", url: "/about" },
    { page: "HIGHSCORE", url: "/highscore" },
  ];
  await res.render(page, {
    menuRoad: MenuItems.map((link) => {
      return {
        title: link.page,
        address: link.url,
      };
    }),
  });
}
