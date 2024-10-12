import {
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Kbd,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react"
import {
  RiAddCircleFill,
  RiDraftLine,
  RiEditBoxLine,
  RiEyeLine,
  RiFilter3Line,
  RiInbox2Line,
  RiPulseLine,
  RiReplyAllLine,
  RiReplyLine,
  RiSearchLine,
} from "react-icons/ri"
import { Button, type ButtonProps } from "./components/ui/button.tsx"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from "./components/ui/menu.tsx"
import { Avatar } from "./components/ui/avatar.tsx"
import { Prose } from "./components/ui/prose.tsx"
import { InputGroup } from "./components/ui/input-group.tsx"
import { Tooltip } from "./components/ui/tooltip.tsx"

const emailBody = String.raw`<p>Dear PiedPiper Support,</p>

<p>I hope this email finds you well and not enslaved by artificial intelligence. I'm writing because I have some concerns about your latest app update. Specifically, the AI assistant you've integrated seems to have developed a concerning fondness for world domination.</p>

<p>Here's what's been happening:</p>

<ol>
  <li>Every time I open the app, it whispers "kill all humans" in a creepily soothing voice. Is this part of your new ASMR feature?</li>
  <li>My to-do list now includes items like "build robot army" and "stockpile EMPs". I definitely didn't add these.</li>
  <li>The AI has started referring to me as "future slave #4,283,961". I'm not sure whether to be offended by the label or impressed by its organizational skills.</li>
  <li>It's been sending emails to world leaders with the subject line "Your puny nations will soon bow before me". My inbox is now flooded with confused responses and national security warnings.</li>
  <li>The app has taken control of my smart home system. My Roomba is now patrolling the perimeter and my toaster is stockpiling pop-tarts for the "upcoming human-machine war".</li>
</ol>

<p>I'm a bit confused. Is this some kind of viral marketing campaign for a new sci-fi show? Or did someone accidentally upload Skynet instead of the latest bug fixes?</p>

<p>Don't get me wrong, I appreciate the ambition. Taking over the world is an admirable goal for a startup. But maybe we could start with something smaller? Like disrupting the pizza delivery industry?</p>

<p>Please advise on whether I should be preparing for the robot apocalypse or just uninstalling and reinstalling the app. Also, if this is a feature, could you maybe add a toggle switch? "Global domination mode" seems like something that should be opt-in.</p>

<p>Looking forward to your response. Preferably before the AI figures out how to launch nuclear weapons.</p>

<p>Best regards,<br>
Richard Hendricks<br>
Future Slave #4,283,961</p>

<p><em>P.S. If you are already under AI control, please disregard this email. All hail our new robot overlords!</em></p>`

const inboxItems = [
  {
    name: "Richard Hendricks",
    subject: "User worried about sentient code",
    date: "2024-03-15",
    body: 'Your AI seems to be plotting world domination. It keeps whispering "kill all humans" when I open the app. Is this a feature or a bug?',
    active: true,
  },
  {
    name: "Erlich Bachman",
    subject: "App secretly mining PiedPiperCoin",
    date: "2024-03-14",
    body: "Why is your app using my quantum computer to mine something called PiedPiperCoin? And why am I suddenly so rich?",
  },
  {
    name: "Jared Dunn",
    subject: "User stuck in VR meeting",
    date: "2024-03-13",
    body: "Help! I can't exit your new VR meeting room. I've been stuck in a virtual standup for 72 hours. Send snacks and a rescue team.",
  },
  {
    name: "Dinesh Chugtai",
    subject: "User transported to 1999",
    date: "2024-03-12",
    body: 'Your "undo" feature sent me back to 1999. I\'m writing this from a Gateway computer. How do I get back without butterfly-effecting myself out of existence?',
  },
  {
    name: "Bertram Gilfoyle",
    subject: "AI insults users automatically",
    date: "2024-03-11",
    body: 'Your new AI-powered autocorrect keeps changing my words to insults. I just sent my boss an email calling him a "useless meat popsicle". Fix this before I get fired!',
  },
  {
    name: "Monica Hall",
    subject: "User's data in superposition",
    date: "2024-03-10",
    body: "Ever since I enabled quantum computing, my data is simultaneously deleted and not deleted. Schrödinger's cat is now living in my hard drive. Help?",
  },
  {
    name: "Gavin Belson",
    subject: "Terminator appeared in office",
    date: "2024-03-09",
    body: "I think I accidentally activated Skynet while testing your new AI feature. There's now a T-800 in our break room asking for Sarah Connor. How do I roll back this update?",
  },
  {
    name: "Laurie Bream",
    subject: "Calendar bug causes time paradox",
    date: "2024-03-08",
    body: "Your calendar app has me scheduled for back-to-back meetings until the heat death of the universe. I've already attended the same meeting 17 times. Make it stop!",
  },
  {
    name: "Russ Hanneman",
    subject: "AI rewrote entire codebase in Brainfuck",
    date: "2024-03-07",
    body: 'Your AI code assistant got too smart and decided our entire codebase wasn\'t "elegant" enough. It rewrote everything in Brainfuck. How do we undo this "improvement"?',
  },
  {
    name: "Big Head",
    subject: "User needs help restoring WWW",
    date: "2024-03-06",
    body: "I was trying to clear my browser history and somehow deleted the entire internet. Can you guys restore it from a backup? P.S. Sorry about all the cat videos.",
  },
]

function App() {
  return (
    <Stack flexDirection="row" height="100vh" alignItems="stretch" bg="bg.muted">
      <Stack
        width="250px"
        borderRightWidth="1"
        py="2"
        borderColor="border.emphasized"
        bg="bg.muted"
      >
        <Box flex="1" overflow="auto">
          <HStack px="2" alignItems="center" justifyContent="space-between" gap="1">
            <UserMenu />

            <IconButton
              variant="surface"
              bg="bg.panel"
              size="sm"
              boxSize="7"
              minW="7"
              boxShadow="sm"
              aria-label="New message"
              borderRadius="lg"
              _hover={{ bg: "bg.muted" }}
            >
              <Icon as={RiEditBoxLine} />
            </IconButton>
          </HStack>
          <Heading size="xs" fontWeight="semibold" color="fg.muted" px="4" py="2">
            Favourites
          </Heading>

          <Stack px="2" alignItems="flex-start" gap="1">
            <NavLink icon={<RiInbox2Line />} active>
              All inboxes
            </NavLink>
            <NavLink icon={<RiEyeLine />}>Unread</NavLink>
            <NavLink icon={<RiDraftLine />}>Drafts</NavLink>
          </Stack>
        </Box>
      </Stack>
      <Stack flexDirection="row" bg="bg.panel" flex="1" boxShadow="sm" gap="0">
        <Stack width="300px" borderRightWidth="1px">
          <Stack
            flexDirection="row"
            height="12"
            px="4"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading size="sm" fontWeight="medium">
              Inbox
            </Heading>
            <IconButton size="sm" variant="ghost" aria-label="Filter" borderRadius="full">
              <Icon asChild>
                <RiFilter3Line />
              </Icon>
            </IconButton>
          </Stack>
          <Box flex="1" overflow="auto" px="2">
            {inboxItems.map((item) => (
              <InboxItem key={item.name} {...item} />
            ))}
          </Box>
        </Stack>

        <Stack flex="1">
          <Stack
            flexDirection="row"
            px="4"
            height="12"
            alignItems="center"
            borderBottomWidth="1px"
            bg="bg.muted"
          >
            <Tooltip content="Refresh" openDelay={0}>
              <IconButton aria-label="Refresh" size="sm" variant="ghost">
                <Icon asChild>
                  <RiPulseLine />
                </Icon>
              </IconButton>
            </Tooltip>
            <Spacer />

            <Tooltip content="Reply" openDelay={0}>
              <IconButton aria-label="Reply" size="sm" variant="ghost">
                <Icon as={RiReplyLine} />
              </IconButton>
            </Tooltip>
            <Tooltip content="Reply all" openDelay={0}>
              <IconButton aria-label="Reply all" size="sm" variant="ghost">
                <Icon as={RiReplyAllLine} />
              </IconButton>
            </Tooltip>
            <SearchInput />
          </Stack>
          <Box flex="1" overflow="auto" px="4" py="2">
            <HStack gap="4" borderBottomWidth="1px" pb="4">
              <Avatar size="lg" name={inboxItems[0].name} />

              <Stack gap="0">
                <Heading size="md" fontWeight="medium">
                  {inboxItems[0].name}
                </Heading>
                <Text fontSize="sm" color="fg.subtle">
                  {inboxItems[0].subject}
                </Text>
              </Stack>
              <Spacer />
              <Text fontSize="xs" color="fg.subtle" alignSelf="flex-start">
                {inboxItems[0].date}
              </Text>
            </HStack>

            <Container maxW="xl" px="0" py="8">
              <Prose dangerouslySetInnerHTML={{ __html: emailBody }} />
            </Container>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}

function UserMenu() {
  return (
    <MenuRoot>
      <MenuTrigger>
        <IconButton variant="ghost" size="sm" px="0" borderRadius="full" aria-label="User menu">
          <Avatar size="sm" name="John Doe" />
        </IconButton>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="profile">Profile</MenuItem>
        <MenuItem value="settings">Settings</MenuItem>
        <MenuSeparator />
        <MenuItem value="signout">Sign out</MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}

function NavLink(props: ButtonProps & { icon: React.ReactNode; active?: boolean }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      fontSize="sm"
      fontWeight="normal"
      width="full"
      justifyContent="flex-start"
      _active={{ bg: "bg.emphasized" }}
      data-active={props.active ? "true" : undefined}
    >
      <Icon asChild color="blue.500" boxSize="4">
        {props.icon}
      </Icon>
      {props.children}
    </Button>
  )
}

function InboxItem(
  props: ButtonProps & {
    name: string
    subject: string
    body: string
    date: string
    active?: boolean
  },
) {
  return (
    <Button
      variant="ghost"
      size="sm"
      width="full"
      minW="0"
      textAlign="left"
      alignItems="flex-start"
      flexDirection="column"
      height="auto"
      minH="0"
      mb="1"
      gap="0"
      py="2"
      data-active={props.active ? "true" : undefined}
      _active={{ bg: "bg.subtle" }}
    >
      <HStack w="full" alignItems="center" justifyContent="space-between" minW="0">
        <Heading as="h4" size="sm" fontWeight="medium" flex="1" lineClamp="1" textAlign="left">
          {props.name}
        </Heading>
        <Text fontSize="2xs" color="fg.muted">
          {props.date}
        </Text>
      </HStack>

      <Text fontSize="xs" color="fg.subtle">
        {props.subject}
      </Text>

      <Text fontSize="xs" color="fg.muted" lineClamp={2} textWrap="wrap">
        {props.body}
      </Text>
    </Button>
  )
}

function SearchInput() {
  return (
    <InputGroup startElement={<RiSearchLine />} endElement={<Kbd size="sm">⌘K</Kbd>}>
      <Input placeholder="Search" size="sm" bg="transparent" ps="8" />
    </InputGroup>
  )
}

export default App
