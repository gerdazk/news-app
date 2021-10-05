import Article from "../components/Article";
import React from "react";
import { shallow } from "enzyme";

describe("Article component:", () => {
  const article = {
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "MATTHEW BARAKAT Associated Press",
    title: "CIA veteran: al-Qaida will rebuild within Afghanistan",
    description: "The CIA man who briefed President George W",
    url: "https://abcnews.go.com/US/wireStory/cia-veteran-al-qaida-rebuild-afghanistan-79880857",
    urlToImage: "null",
    publishedAt: "2021-09-07T20:18:30Z",
    content:
      "FALLS CHURCH, Va. -- The CIA man who briefed President George W. Bush on Sept. 11, 2001, and later President Barack Obama on the intelligence that led to the killing of Osama bin Laden said Tuesday t… [+2675 chars]",
  };

  const article2 = {
    source: {
      id: "abc-news",
      name: "ABC News",
    },
    author: "Sarah Kolinovsky",
    title: "Biden to lay out new strategy against delta variant of COVID-19",
    description:
      "President Joe Biden will lay out a new effort to combat the delta variant of COVID-19 on Thursday, the White House said Tuesday.",
    url: "https://abcnews.go.com/Politics/biden-lay-strategy-delta-variant-covid-19/story?id=79872980",
    urlToImage:
      "https://s.abcnews.com/images/Politics/biden-rt-jt-210907_1631038005713_hpMain_16x9_992.jpg",
    publishedAt: "2021-09-07T19:51:31Z",
    content:
      "As COVID-19 case rates remain at a level not seen since before vaccines were widely available in the United States, President Joe Biden is set to deliver remarks Thursday on a new strategy to stop th… [+3903 chars]",
  };

  let component;

  it("To match snapshot with data from article 1", () => {
    component = shallow(<Article article={article} />);
    expect(component).toMatchSnapshot();
  });

  it("To match snapshot with data from article 2", () => {
    component = shallow(<Article article={article2} />);
    expect(component).toMatchSnapshot();
  });
  it("To have a button with 'Read more' text", () => {
    component = shallow(<Article article={article2} />);
    const data = component.find('[data-testid="articleSource"]').text();
    expect(data).toMatchInlineSnapshot(`"${article2.source.name}"`);
  });
});
