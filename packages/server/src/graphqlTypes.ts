import { Field, ObjectType, registerEnumType } from "type-graphql";

export enum Element {
  p = "p",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  ul = "ul",
  ol = "ol",
  input = "input",
  img = "img",
  li = "li",
  blockquote = "blockquote",
}

registerEnumType(Element, {
  name: "Element"
})

@ObjectType()
export class Annotations {
  @Field(() => Boolean)
  bold: boolean;
  @Field(() => Boolean)
  italic: boolean;
  @Field(() => Boolean)
  underline: boolean;
  @Field(() => Boolean)
  strikethrough: boolean;
  @Field(() => Boolean)
  code: boolean;
  @Field(() => String)
  color: string;
}


@ObjectType()
export class Text {
  @Field(() => String)
  content: string;
  @Field(() => String, { nullable: true })
  link: string | null;
  @Field(() => Annotations, { nullable: true })
  annotations: Annotations | null;
}

@ObjectType()
export class Img {
  @Field(() => String)
  url: string;
}

@ObjectType()
export class ParsedBlock {
  @Field(() => String)
  id: string;
  @Field(() => Element)
  element: Element;
  @Field(() => [Text], { nullable: true })
  text?: Text[];
  @Field({ nullable: true })
  checked?: boolean;
  @Field(() => Img, { nullable: true })
  img?: Img;
}

@ObjectType()
export class Block {
  @Field(() => String)
  id: string;
  @Field(() => String)
  title: string;
  @Field(() => String)
  last_edited: string;
  @Field(() => String)
  slug: string;
}

@ObjectType()
export class PageResponse {
  @Field(() => String)
  title: string
  @Field(() => [ParsedBlock])
  blocks: ParsedBlock[]
  @Field()
  published: string
}

@ObjectType()
export class Social{
  @Field()
  username: string
  @Field()
  url: string
}

@ObjectType()
export class Socials{
  @Field()
  github: Social
  @Field()
  twitter: Social
  @Field()
  linkedin: Social
}

@ObjectType()
export class User{
  @Field()
  name: string
  @Field()
  img: string
  @Field()
  work: string
  @Field()
  about: string
  @Field()
  resume: string
  @Field()
  socials: Socials
}
